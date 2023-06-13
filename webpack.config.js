const path = require("path");

module.exports = {
  mode: "production", // or 'development'
  entry: {
    app: "./src/server.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    fallback: {
      timers: require.resolve("timers-browserify"),
      tty: require.resolve("tty-browserify"),
      url: require.resolve("url/"),
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      fs: false,
      assert: require.resolve("assert/"),
      querystring: require.resolve("querystring-es3"),
      crypto: require.resolve("crypto-browserify"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      net: require.resolve("net-browserify"),
      async_hooks: require.resolve("async_hooks"),
    },
  },
};
