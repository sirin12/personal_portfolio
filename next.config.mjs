/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                     // ensures static HTML output
  basePath: '/personal_portfolio',      // repo name, required for GitHub Pages subpath
  assetPrefix: '/personal_portfolio/',  // fixes _next/static paths
  trailingSlash: true,                  // adds trailing slash for routing
  images: {
    unoptimized: true,                  // disables server-side image optimization
  },
};

export default nextConfig;
