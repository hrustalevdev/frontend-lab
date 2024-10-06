import path from "node:path";
import webpack from "webpack";
import { getWebpackConfig } from "./config/webpack/webpack-config";

const config: webpack.Configuration = getWebpackConfig({
  mode: "production",
  isDev: process.env.NODE_ENV === "development",
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
});

export default config;
