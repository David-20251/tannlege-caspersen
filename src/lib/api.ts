export interface LeadPayload {
  name: string;
  birthdate: string;
  phone: string;
  preferred_date: string;
  timestamp: string;
  source: string;
}

/**
 * Send lead data via secure backend proxy.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch("/api/submit-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Lead submission failed");
    throw new Error(`Lead submission failed with status ${response.status}`);
  }
}
