import webpack from "webpack";

type Loader = webpack.RuleSetRule

export function getLoaders(): Loader[] {
  const tsLoader: Loader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

  return [
    tsLoader
  ]
}
