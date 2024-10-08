import webpack from "webpack";

type Loader = webpack.RuleSetRule;

export function getLoaders(): Loader[] {
  const ts: Loader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scss: Loader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  return [ts, scss];
}
