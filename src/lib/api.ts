const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26914796/upwzizb/";

export interface LeadPayload {
  name: string;
  birthdate: string;
  phone: string;
  preferred_date: string;
  timestamp: string;
  source: string;
}

/**
 * Send lead data to Zapier webhook.
 * Future: add SMS trigger, Supabase insert, etc.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  try {
    console.log("Sending lead:", payload);
    await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });
    console.log("Webhook sent (no response due to no-cors)");
  } catch (error) {
    console.error("Webhook error:", error);
    throw error;
  }
}
