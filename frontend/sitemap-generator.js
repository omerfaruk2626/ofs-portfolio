const fs = require("fs");
const path = require("path");

const baseUrl = "https://omerfaruksivri.com.tr";

const pages = ["/", "/projects", "/technologies", "/about", "/contact"];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), xml, "utf8");

console.log(
  // "✅ Sitemap başarıyla oluşturuldu! public/sitemap.xml dosyasına kaydedildi."
);
