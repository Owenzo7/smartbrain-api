const path = require("path");

module.exports = {
  entry: {
    app: "./src/server.js",
    image: "./src/controllers/image.js",
    profile: "./src/controllers/profile.js",
    register: "./src/controllers/register.js",
    signin: "./src/controllers/signin.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = {
  mode: "production", // or 'production'
  // rest of the webpack configuration
};
