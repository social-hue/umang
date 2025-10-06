/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.umangliving.com", // your live site URL
  generateRobotsTxt: true, // auto-generates robots.txt
  sitemapSize: 5000, // max URLs per sitemap
  changefreq: "weekly",
  priority: 0.8,
  autoLastmod: true, // ✅ adds <lastmod> to each URL

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "meta-externalagent", disallow: "/" },
    ],
    // ✅ You don't need to reference sitemap.xml here — it's added automatically
  },
};
