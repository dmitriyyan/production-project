import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

import type { BuildPaths } from './types/config';


export default function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ];
}