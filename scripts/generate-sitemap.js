const fs = require("fs");
const path = require("path");

const baseUrl = "https://lyspasandco.com";
const currentDate = new Date().toISOString().split("T")[0];

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/sobre-nosotros", priority: "0.8", changefreq: "monthly" },
  { path: "/wastezero", priority: "0.9", changefreq: "monthly" },
  { path: "/flowstable", priority: "0.9", changefreq: "monthly" },
  { path: "/5splus", priority: "0.9", changefreq: "monthly" },
  { path: "/leanbridge", priority: "0.9", changefreq: "monthly" },
  { path: "/kaizen-action", priority: "0.9", changefreq: "monthly" },
  { path: "/stratbridge", priority: "0.8", changefreq: "monthly" },
  { path: "/projectfocus", priority: "0.8", changefreq: "monthly" },
  { path: "/change-bridge", priority: "0.8", changefreq: "monthly" },
  { path: "/decisiones-estadisticas", priority: "0.8", changefreq: "monthly" },
  {
    path: "/lean-enterprise-transformation",
    priority: "0.8",
    changefreq: "monthly",
  },
  { path: "/ops-bridge", priority: "0.8", changefreq: "monthly" },
  { path: "/people-first", priority: "0.8", changefreq: "monthly" },
  { path: "/asset-control-bridge", priority: "0.8", changefreq: "monthly" },
  { path: "/autops", priority: "0.8", changefreq: "monthly" },
  { path: "/safe-process", priority: "0.8", changefreq: "monthly" },
  { path: "/measure-bridge", priority: "0.8", changefreq: "monthly" },
  { path: "/process-design-bridge", priority: "0.8", changefreq: "monthly" },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
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
