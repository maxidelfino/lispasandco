import { useCallback } from "react";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

export interface DownloadTrackingParams {
  service: string;
  location: string;
  language?: string;
}

/**
 * Hook que devuelve una función para descargar un PDF por href y nombre de archivo.
 * Evita repetir la lógica de crear un link temporal en todos los Hero y CTAs.
 * Si se pasa trackingParams, registra el evento pdf_download en GA4.
 */
export function useDownloadPdf(
  href: string,
  downloadFilename: string,
  trackingParams?: DownloadTrackingParams
): () => void {
  return useCallback(() => {
    if (trackingParams) {
      trackEvent(GA_EVENTS.DOWNLOAD_CLICK, {
        file_name: downloadFilename,
        service: trackingParams.service,
        location: trackingParams.location,
        language: trackingParams.language,
        page_path: window.location.pathname,
      });
    }
    const link = document.createElement("a");
    link.href = href;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [href, downloadFilename, trackingParams]);
}
