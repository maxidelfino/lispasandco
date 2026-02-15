declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

export const GA_MEASUREMENT_ID = "G-BVDQHM3XTL";

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Envío seguro del event: si gtag existe lo llamamos,
 * si no, empujamos al dataLayer (gtag.js lo procesará cuando esté listo).
 * Añadimos send_to para forzar el Measurement ID (útil si hay múltiples).
 */
export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  ensureDataLayer();

  const payload = {
    ...params,
    debug_mode: params.debug_mode ?? false, // opcional en dev
    send_to: params.send_to ?? GA_MEASUREMENT_ID,
  };

  // siempre empujamos al dataLayer (útil para que GTM/gtag lo vea)
  window.dataLayer!.push({ event: eventName, ...payload });

  // además, si gtag está listo, lo llamamos directamente (evita delay)
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, payload);
    } catch (err) {
      // no hacer crash en producción, pero registrar en consola para debug
      // eslint-disable-next-line no-console
      console.warn("gtag call failed", err);
    }
  }
};

export const pageview = (path: string, params: Record<string, any> = {}) => {
  trackEvent("page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
    ...params,
  });
};
