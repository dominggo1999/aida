// next.config.js
module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'images.pexels.com', 'res.cloudinary.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
