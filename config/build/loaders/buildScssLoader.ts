import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (path: string) => Boolean(path.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});
