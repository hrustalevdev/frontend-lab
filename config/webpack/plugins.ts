import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function getPlugins({
  paths,
}: {
  paths: { html: string };
}): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
}
