/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.umangliving.com", // ✅ your live site URL
  generateRobotsTxt: true, // ✅ auto-generates robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  autoLastmod: true,

  robotsTxtOptions: {
    policies: [
      // General rule for all crawlers
      { userAgent: "*", disallow: ["/_next/"], allow: ["/"] },
      // Block known AI and non-essential bots
      { userAgent: "Amazonbot", disallow: ["/"] },
      { userAgent: "Applebot-Extended", disallow: ["/"] },
      { userAgent: "Bytespider", disallow: ["/"] },
      { userAgent: "CCBot", disallow: ["/"] },
      { userAgent: "ClaudeBot", disallow: ["/"] },
      { userAgent: "Google-Extended", disallow: ["/"] },
      { userAgent: "GPTBot", disallow: ["/"] },
      { userAgent: "meta-externalagent", disallow: ["/"] },
    ],
    //  The sitemap URL will be auto-generated, no need to add it manually.
    additionalSitemaps: [
      "https://www.umangliving.com/sitemap-0.xml", // optional explicit reference
    ],
  },
};
