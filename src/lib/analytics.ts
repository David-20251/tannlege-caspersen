/**
 * Analytics helper — fires events for future Facebook Pixel / GA integration.
 */
export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  // Log event name only — no PII
  console.log(`[Analytics] ${eventName}`);

  // Future: Facebook Pixel
  // if (typeof window.fbq === "function") {
  //   window.fbq("track", eventName, data);
  // }

  // Future: Google Analytics
  // if (typeof window.gtag === "function") {
  //   window.gtag("event", eventName, data);
  // }
}
