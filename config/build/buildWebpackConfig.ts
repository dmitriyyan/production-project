import webpack from 'webpack';

import type { BuildOptions } from './types/config';

import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolves from './buildResolves';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, isDev, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
