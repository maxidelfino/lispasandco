import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseUrl = "https://www.lyspasandco.com";
const currentDate = new Date().toISOString().split("T")[0];

const routes = [
  { path: "/" },
  { path: "/sobre-nosotros" },
  { path: "/wastezero" },
  { path: "/flowstable" },
  { path: "/5splus" },
  { path: "/leanbridge" },
  { path: "/kaizen-action" },
  { path: "/stratbridge" },
  { path: "/projectfocus" },
  { path: "/change-bridge" },
  { path: "/decisiones-estadisticas" },
  { path: "/lean-enterprise-transformation" },
  { path: "/ops-bridge" },
  { path: "/people-first" },
  { path: "/asset-control-bridge" },
  { path: "/autops" },
  { path: "/safe-process" },
  { path: "/measure-bridge" },
  { path: "/process-design-bridge" },
  { path: "/politica-de-privacidad" },
];

const hreflangEntry = (url, lang) =>
  `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`;

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map((route) => {
    const url = `${baseUrl}${route.path}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
${hreflangEntry(url, "es")}
${hreflangEntry(url, "en")}
${hreflangEntry(url, "pt")}
${hreflangEntry(url, "x-default")}
  </url>`;
  })
  .join("\n")}
</urlset>`;

  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("✅ Sitemap generado exitosamente en public/sitemap.xml");
};

generateSitemap();
