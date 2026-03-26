import asyncio
import json
import os
import tempfile
from http.server import BaseHTTPRequestHandler, HTTPServer

import edge_tts


HOST = "127.0.0.1"
PORT = int(os.getenv("TTS_PORT", "8099"))
DEFAULT_VOICE = os.getenv("TTS_VOICE_NB", "nb-NO-PernilleNeural")
DEFAULT_VOICE_EN = os.getenv("TTS_VOICE_EN", "en-US-JennyNeural")


def _is_probably_english(text: str) -> bool:
  lower = f" {text.lower()} "
  markers = [" the ", " and ", " you ", " are ", " is ", " i ", " want ", " please ", " how "]
  score = sum(1 for m in markers if m in lower)
  return score >= 2


async def _synthesize_mp3_bytes(text: str, voice: str) -> bytes:
  # edge_tts saves to a file; use a temp file and return bytes.
  fd, path = tempfile.mkstemp(prefix="tts_", suffix=".mp3")
  os.close(fd)
  try:
    tts = edge_tts.Communicate(text, voice)
    await tts.save(path)
    with open(path, "rb") as f:
      return f.read()
  finally:
    try:
      os.remove(path)
    except Exception:
      pass


class Handler(BaseHTTPRequestHandler):
  def _send_cors(self):
    self.send_header("Access-Control-Allow-Origin", "*")
    self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
    self.send_header("Access-Control-Allow-Headers", "Content-Type")

  def do_OPTIONS(self):
    self.send_response(204)
    self._send_cors()
    self.end_headers()

  def do_POST(self):
    if self.path != "/tts":
      self.send_response(404)
      self._send_cors()
      self.end_headers()
      return

    length = int(self.headers.get("Content-Length", "0"))
    raw = self.rfile.read(length) if length > 0 else b"{}"

    try:
      payload = json.loads(raw.decode("utf-8"))
    except Exception:
      payload = {}

    text = str(payload.get("text", "")).strip()
    voice = str(payload.get("voice", "")).strip()

    if not text:
      self.send_response(400)
      self._send_cors()
      self.send_header("Content-Type", "application/json; charset=utf-8")
      self.end_headers()
      self.wfile.write(json.dumps({"error": "text is required"}).encode("utf-8"))
      return

    # Reasonable guardrails to avoid huge requests.
    if len(text) > 1200:
      text = text[:1200]

    if not voice:
      voice = DEFAULT_VOICE_EN if _is_probably_english(text) else DEFAULT_VOICE

    try:
      mp3 = asyncio.run(_synthesize_mp3_bytes(text, voice))
      self.send_response(200)
      self._send_cors()
      self.send_header("Content-Type", "audio/mpeg")
      self.send_header("Cache-Control", "no-store")
      self.end_headers()
      self.wfile.write(mp3)
    except Exception as e:
      self.send_response(500)
      self._send_cors()
      self.send_header("Content-Type", "application/json; charset=utf-8")
      self.end_headers()
      self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))


def main():
  print(f"TTS server listening on http://{HOST}:{PORT}/tts")
  httpd = HTTPServer((HOST, PORT), Handler)
  httpd.serve_forever()


if __name__ == "__main__":
  main()

