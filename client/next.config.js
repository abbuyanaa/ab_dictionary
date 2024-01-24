const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  distDir: process.env.NODE_ENV === 'production' ? 'build' : null, // null - .next
  compress: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
});
