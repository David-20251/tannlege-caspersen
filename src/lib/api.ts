import { supabase } from "@/integrations/supabase/client";

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
  const { data, error } = await supabase.functions.invoke("submit-lead", {
    body: payload,
  });

  if (error) {
    console.error("Lead submission failed");
    throw error;
  }
}
