/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.umangliving.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  autoLastmod: true,

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: ["/_next/"], allow: ["/"] },
      { userAgent: "Amazonbot", disallow: ["/"] },
      { userAgent: "Applebot-Extended", disallow: ["/"] },
      { userAgent: "Bytespider", disallow: ["/"] },
      { userAgent: "CCBot", disallow: ["/"] },
      { userAgent: "ClaudeBot", disallow: ["/"] },
      { userAgent: "Google-Extended", disallow: ["/"] },
      { userAgent: "GPTBot", disallow: ["/"] },
      { userAgent: "meta-externalagent", disallow: ["/"] },
    ],
    additionalSitemaps: [
      "https://www.umangliving.com/sitemap-0.xml",
    ],
    // remove or omit the "Host" directive entirely
  },
};
