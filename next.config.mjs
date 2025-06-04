import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // Turbopack optimizations for MDX
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Page extensions
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  
  // Turbopack optimizations
  transpilePackages: ["next-mdx-remote"],
  
  // Server external packages (moved from experimental)
  serverExternalPackages: ["sharp"],
  
  // SASS optimizations
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      // Optimize CSS handling
      "*.module.css": {
        loaders: ["css-loader"],
        as: "*.css",
      },
      "*.module.scss": {
        loaders: ["sass-loader"],
        as: "*.css",
      },
    },
  },

  // Experimental features
  experimental: {
    // Enable optimizePackageImports for better tree shaking
    optimizePackageImports: [
      "@once-ui/components",
      "react-icons",
      "react-icons/md",
      "react-icons/fa",
      "react-icons/io",
    ],
  },

  // Vercel deployment optimizations
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },

  // Cache optimization
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },

  // Security headers for Vercel
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
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
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Output for Vercel
  output: "standalone",
};

export default withMDX(nextConfig);
