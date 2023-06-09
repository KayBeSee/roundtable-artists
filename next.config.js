/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "img.youtube.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
