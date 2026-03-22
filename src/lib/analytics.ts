/**
 * Analytics helper — fires events for future Facebook Pixel / GA integration.
 * Replace console.log with actual pixel/GA calls when ready.
 */
export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  console.log(`[Analytics] ${eventName}`, data);

  // Future: Facebook Pixel
  // if (typeof window.fbq === "function") {
  //   window.fbq("track", eventName, data);
  // }

  // Future: Google Analytics
  // if (typeof window.gtag === "function") {
  //   window.gtag("event", eventName, data);
  // }
}
