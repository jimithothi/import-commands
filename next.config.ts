import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Compression (gzip / brotli handled by Next or Nginx)
  compress: true,

  // ✅ Recommended
  reactStrictMode: true,

  // ✅ Remove source maps in production
  productionBrowserSourceMaps: false,

  // ✅ Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // ✅ Cache static assets
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
