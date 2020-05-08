const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: [
    resolve(__dirname, "../src/client/index.tsx"),
    resolve(__dirname, "../src/server/server.ts"),
  ],
  devtool: "source-map",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    contentBase: resolve(__dirname, "../public/"),
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx"],
    modules: [resolve("node_modules"), resolve("src")],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          onlyCompileBundledFiles: true,
          configFile: resolve(__dirname, "../tsconfig.json"),
        },
      },
      {
        test: /\.(png|jpe?g|gif|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "public",
              emitFile: true,
            },
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: false,
        },
      },
    ],
  },
  output: {
    path: resolve(__dirname, "../dist/"),
    filename: "bundle.js",
  },
};
