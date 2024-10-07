import webpack from "webpack";
import { getDevServerConfig } from "./dev-server";
import { getLoaders } from "./loaders";
import { getPlugins } from "./plugins";
import { getResolvers } from "./resolvers";

export function getWebpackConfig(options: {
  mode: "production" | "development";
  port: number | string;
  paths: {
    entry: string;
    build: string;
    html: string;
  };
}): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: getPlugins({ paths }),
    module: {
      rules: getLoaders(),
    },
    resolve: getResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? getDevServerConfig(options) : undefined,
  };
}
