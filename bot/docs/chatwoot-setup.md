# Chatwoot Setup Guide - Glass Tilbud Support Portal

This guide covers the complete setup for integrating Chatwoot support portal with your Python voice bot and Next.js frontend.

---

## 📋 Overview

Chatwoot is an open-source multi-channel customer engagement platform that:
- Provides a professional web-based support portal (hosted on port 3081)
- Lets you view all conversations across channels
- Manage conversations with filters, tags, and status
- Send voice notes to customers (optional feature)
- Receive webhook callbacks from your Python lens-bot for two-way communication

---

## 🚀 Quick Start Commands

```bash
# 1. Install Chatwoot Docker images
docker run -d \
  --name chatwoot-api \
  -p 3080:3000 \
  chatwoot/api:latest

# 2. Set up environment variables (create .env file)
cat > chatwoot/.env << 'EOF'
CHATWOOT_API_KEY=your_api_key_here
DATABASE_URL=postgres://postgres:password@db:5432/chatwoot
REDIS_URL=redis://redis:6379/0
EOF

# 3. Build and start all services
docker-compose build
docker-compose up -d

# 4. Access the following URLs:
#   - Frontend support portal: http://localhost:3081
#   - Admin dashboard: http://localhost:3081/admin (first time setup)
#   - API: http://localhost:3080
```

---

## 🗄️ Database & Redis Setup

Chatwoot requires PostgreSQL for database storage and Redis for caching/queues.

### Docker Compose Services

```yaml
services:
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: your_secure_password_here
    volumes:
      - pgdata:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    volumes:
      - redisdata:/data

  api:
    image: chatwoot/api:latest
    environment:
      DATABASE_HOST: db
      REDIS_URL: redis://redis:6379/0
    
  web:
    image: chatwoot/web:latest
    ports:
      - "3081:3000"  # Frontend support portal

volumes:
  pgdata:
  redisdata:
```

---

## 🔧 Integration with Your Python Lens-Bot

### Step 1: Create Chatwoot Account via Admin Panel

1. Navigate to http://localhost:3081/admin (or http://localhost:3081/portal/accounts/new)
2. Register a new account named "Glass Tilbud Support"
3. Generate an API token from the account settings
4. Note your Account ID from the dashboard

### Step 2: Install Required Python Packages

```bash
pip install requests edge_tts speech_recognition
```

### Step 3: Create Voice Bot Integration (`voice-bot-integration.py`)

Create this file to handle all Chatwoot communication:

```python
"""
Voice Bot Integration for Chatwoot
Sends voice notes and text messages to support portal
"""
import requests
import json
from pathlib import Path
from datetime import datetime

# Chatwoot Configuration
CHATWOOT_SERVER = "http://localhost:3080"  # API server
API_TOKEN = "YOUR_API_TOKEN_FROM_ADMIN_PANEL"
ACCOUNT_ID = 1  # Get this from admin dashboard
CHANNEL_IDENTIFIER = "glass-tilbud-support"  # Unique channel identifier

def get_voice_bot_url():
    """Din eksisterende lens-support-bot URL"""
    return "http://localhost:8081/api/lens-bot"

class VoiceBotIntegration:
    def __init__(self):
        self.base_url = f"{CHATWOOT_SERVER}/api/v1/accounts/{ACCOUNT_ID}/contacts/{CHANNEL_IDENTIFIER}"
        self.api_headers = {
            "Authorization": f"token {API_TOKEN}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    
    def create_chat(self, customer_id: str, name: str):
        """Opprett ny chat"""
        payload = {
            "account_id": ACCOUNT_ID,
            "channel_identifier": CHANNEL_IDENTIFIER,
            "contact_attributes": {"name": name},
            "message": {
                "type": "chat",
                "content": f"Hei! Jeg er din personlige linse-assistent 👓\n\nJeg kan:\n• Hjelpe med riktig linsetype\n• Forstå om synsproblemer\n• Gi produktrådgivning"
            }
        }
        
        response = requests.post(f"{self.base_url}/chats", json=payload, headers=self.api_headers)
        if response.status_code == 201:
            chat_data = response.json()
            self.chat_id = chat_data["id"]
            print(f"✅ Chat opprettet: {self.chat_id}")
            return True
        else:
            print(f"❌ Chat oppretting feilet: {response.text}")
            return False
    
    def send_text_message(self, message: str):
        """Send tekstmelding"""
        payload = {
            "account_id": ACCOUNT_ID,
            "channel_identifier": CHANNEL_IDENTIFIER,
            "message": {
                "type": "chat",
                "content": message,
                "attachments": []
            }
        }
        
        response = requests.post(f"{self.base_url}/messages/{self.chat_id}", json=payload, headers=self.api_headers)
        
        if response.status_code == 201:
            print(f"✅ Melding sendt")
            return True
        else:
            print(f"❌ Feil ved meldingsending: {response.status_code} - {response.text}")
            return False

# Usage Example
if __name__ == "__main__":
    bot = VoiceBotIntegration()
    
    # Create chat with customer name
    success = bot.create_chat(customer_id="123", name="Kjell Hansen")
    
    if success:
        # Send welcome message
        bot.send_text_message("Hei Kjell! Jeg kan hjelpe deg med å finne de rette linser for dine øyn 👓")
```

---

## 🌐 Webhook Integration (Two-Way Communication)

### Setup Chatwoot to Call Your Python Bot

1. **Chatwoot Admin Settings:**
   - Go to: http://localhost:3081/admin/accounts/[account-id]/channels/webhook
   - Add webhook URL: `http://localhost:8081/api/lens-bot/webhook`
   - Enable "Enable Webhook" toggle

### Add Webhook Endpoint to Your Lens-Bot

Update your existing lens-support-bot.ts file or create a new endpoint:

```typescript
app.post("/api/lens-bot/webhook", async (req, res) => {
  try {
    const userMessage = String(req.body?.message ?? "").trim();
    
    // Handle voice attachments from Chatwoot
    if (req.files && req.files.attachment) {
      const audioPath = Path.of(req.files.attachment.path).name;
      
      console.log(`🎤 Voice received via webhook: ${audioPath}`);
      console.log(`Message: ${userMessage}`);
      
      // Combine voice + text message for processing
      const fullPrompt = `Voice Note + Text:\n${userMessage}\n\nAudio file: ${audioPath}`;
      
      // Continue with your existing LM Studio integration...
    }
    
    res.json({ received: true, message: userMessage });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: String(error) });
  }
});
```

---

## 🎤 Voice Recording Feature (Optional)

If you want to send voice notes to customers via Chatwoot, you can use Edge TTS. Create `voice_recorder.py`:

```python
"""
Voice Recording with Edge TTS + Speech-to-Text
Send voice notes to customers via Chatwoot
"""
import requests
from edge_tts import Communicator
import speech_recognition as sr
from pathlib import Path
from datetime import datetime

def generate_voice_response(text: str, output_file: str):
    """Generer stemmetil svar"""
    communicator = Communicator()
    
    # Norsk stemme (Merlin - naturlig norsk)
    audio_stream = communicator.create(
        message=text, 
        voice="bg",  # Norsk bokmål
        language="nb-NO"
    )
    
    with open(output_file, "wb") as f:
        for chunk in audio_stream:
            f.write(chunk)
    
    return output_file

def record_voice_input():
    """Opptar stemme fra mikrofon"""
    recognizer = sr.Recognizer()
    
    with sr.Microphone() as source:
        print("🎤 Si din beskjed til mikrofonen...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    
    # Convert to MP3
    temp_wav = "/tmp/voice_recording.wav"
    with sr.AudioFile(temp_wav) as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.record(source)
    
    return audio

def upload_voice_note(chat_id: str, audio_path: str):
    """Last opp stemmeopptak til Chatwoot"""
    files = {"attachment": Path(audio_path)}
    
    payload = {
        "account_id": 1,
        "channel_identifier": "glass-tilbud-support",
        "message": {
            "type": "chat",
            "content": "🎤 Stemmeopptak sendt. Avvent svar."
        }
    }
    
    # Note: This requires proper multipart form data setup
    # Chatwoot's API accepts file attachments via POST /messages/{id}
    headers = {
        "Authorization": f"token YOUR_API_TOKEN",
        "Content-Type": "multipart/form-data"
    }
    
    response = requests.post(
        f"http://localhost:3080/api/v1/accounts/1/contacts/glass-tilbud-support/messages/{chat_id}",
        files=files,
        data={"message": json.dumps(payload["message"])},
        headers=headers
    )
    
    if response.status_code == 201:
        return True
    else:
        print(f"Feil: {response.text}")
        return False
```

---

## 🔐 Security Considerations

When deploying to production:

1. **Set Strong Environment Variables:**
   - `POSTGRES_PASSWORD` - Use a strong, random password
   - `API_TOKEN` - Generate fresh tokens for each account
   - Never commit `.env` files to git

2. **Use HTTPS in Production:**
   - Configure SSL/TLS for port 3081 (frontend)
   - Use reverse proxy (nginx or cloud provider's load balancer)

3. **Rate Limiting:**
   - Add rate limiting on webhook endpoints
   - Prevent brute force attacks on admin panel

4. **Environment Isolation:**
   - Separate development and production Chatwoot instances
   - Use different database instances for each environment

---

## 📊 Monitoring & Logs

Check Docker logs:

```bash
# View all services
docker-compose logs -f

# View API service only
docker-compose logs -f api

# View web/portal service
docker-compose logs -f web
```

Access admin dashboard to view conversations and analytics.

---

## 🎯 Summary of Available Ports

After successful setup, you'll have access to:

| Service | Port | Purpose |
|---------|------|---------|
| Lens Bot Frontend | 8081 | Your main voice bot interface |
| Chatwoot Frontend | 3081 | Professional support portal |
| Chatwoot API | 3080 | Backend communication |
| Admin Dashboard | 3081/admin | Support management panel |

---

## ✅ Next Steps After Setup

1. **Test Basic Flow:** Create a test chat via API, send/receive messages
2. **Configure Webhooks:** Set up Chatwoot → Lens-Bot webhook connection
3. **Train Your Bot:** Add voice responses and knowledge base
4. **Set Up Notifications:** Configure email alerts for new chats
5. **Deploy to Production:** Move from Docker Desktop to cloud hosting

---

*Guide last updated: 2026-03-26*