import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function getPlugins(options: {
  paths: { html: string };
}): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
}
