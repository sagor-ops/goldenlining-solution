/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimisation — serve AVIF/WebP automatically
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },

  // Gzip / Brotli compression
  compress: true,

  // Strip X-Powered-By header
  poweredByHeader: false,

  // Tree-shake large icon/animation packages at build time
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Aggressive long-term caching for static assets
  async headers() {
    return [
      {
        source: "/:path*\\.(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options",        value: "SAMEORIGIN" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
