import { useCallback } from "react";

/**
 * Hook que devuelve una función para descargar un PDF por href y nombre de archivo.
 * Evita repetir la lógica de crear un link temporal en todos los Hero y CTAs.
 */
export function useDownloadPdf(href: string, downloadFilename: string): () => void {
  return useCallback(() => {
    const link = document.createElement("a");
    link.href = href;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [href, downloadFilename]);
}
