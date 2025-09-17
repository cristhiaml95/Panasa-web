/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'via.placeholder.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig