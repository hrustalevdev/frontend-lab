import path from "node:path";
import webpack from "webpack";
import { getWebpackConfig } from "./config/webpack/webpack-config";

export default (env: {
  mode: "production" | "development";
  port: string;
}): webpack.Configuration => {
  const mode = env.mode;
  const port = env.port || 3000;

  return getWebpackConfig({
    mode,
    port,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
  });
};
