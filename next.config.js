/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    unoptimized: true
  },
  reactStrictMode: false,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
        
      }
    )
    return cfg;
  }
}

module.exports = nextConfig

