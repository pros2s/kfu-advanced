import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const baseApiUrl =
    env.baseApiUrl ||
    'https://currency-conversion-and-exchange-rates.p.rapidapi.com';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    baseApiUrl,
    project: 'frontend',
  });

  return config;
};
