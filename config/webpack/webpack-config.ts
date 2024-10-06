import webpack from "webpack";
import { getLoaders } from "./loaders";
import { getPlugins } from "./plugins";
import { getResolvers } from "./resolvers";

export function getWebpackConfig(options: {
  mode: "production" | "development";
  isDev: boolean;
  paths: {
    entry: string;
    build: string;
    html: string;
  };
}): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: getLoaders(),
    },
    resolve: getResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: getPlugins({ paths }),
  };
}
