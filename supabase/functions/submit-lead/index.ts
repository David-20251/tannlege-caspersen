const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Simple in-memory rate limiter
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT) {
    rateMap.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('cf-connecting-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const payload = await req.json();
    const normalizedPhone = String(payload.phone ?? '').replace(/\D/g, '');

    if (normalizedPhone.length < 8) {
      return new Response(JSON.stringify({ error: 'Invalid phone' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const webhookUrl = Deno.env.get('ZAPIER_WEBHOOK_URL');
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: 'Webhook not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const forwardPayload = {
      ...payload,
      name: typeof payload.name === 'string' ? payload.name.trim() : '',
      birthdate: typeof payload.birthdate === 'string' ? payload.birthdate.trim() : '',
      phone: normalizedPhone,
      preferred_date: typeof payload.preferred_date === 'string' ? payload.preferred_date : 'Ikke valgt',
      timestamp: typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString(),
      source: typeof payload.source === 'string' ? payload.source : 'SmartLook Optikk - 40% kampanje',
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const zapResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(forwardPayload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!zapResponse.ok) {
      return new Response(JSON.stringify({ error: 'Upstream error' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit lead' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
