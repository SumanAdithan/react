import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // static HTML export into out/ (GitHub Pages has no Node.js server)
  output: 'export',
  // "/react" on GitHub Pages (set by the workflow), empty locally
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  // emit /docs/hooks/index.html so static hosts resolve /docs/hooks/
  trailingSlash: true,
  // the image optimisation API needs a server
  images: { unoptimized: true },
};

export default withMDX(config);
