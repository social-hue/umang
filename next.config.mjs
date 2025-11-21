/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    dangerouslyAllowSVG: false,
    formats: ["image/avif", "image/webp"],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Enable compression for faster load
  compress: true,

  // Bundle optimizations
  swcMinify: true,
};

export default nextConfig;
