/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'",
  },
];

const nextConfig = {
  // Temporarily disable for debugging hydration issues
  reactStrictMode: isDev ? false : true,

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@/components',
    ],
  },

  images: {
    dangerouslyAllowSVG: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // No cache in dev, aggressive cache in prod
    minimumCacheTTL: isProd ? 60 * 60 * 24 * 365 : 0,
  },

  async headers() {
    const baseHeaders = [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];

    // Production: Aggressive caching
    if (isProd) {
      return [
        ...baseHeaders,
        {
          source: "/blog/:path*",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/_next/static/:path*",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/_next/image/:path*",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    }

    // Development: No caching
    return [
      ...baseHeaders,
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },

  compress: true,

  compiler: {
    removeConsole: isProd ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  poweredByHeader: false,
  
  // Reduce Turbopack noise in development
  turbopack: {},
  
  // Better error messages in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;