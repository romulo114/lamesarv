module.exports = {
  webpack5: true,
  reactStrictMode: true,
  // modules: true,
  images: {
    loader: "cloudinary",
    domains: ["https://res.cloudinary.com"],
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
