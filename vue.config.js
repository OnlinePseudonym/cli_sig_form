module.exports = {
  configureWebpack: {
    // It will be merged into the final Webpack config
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: -1,
              },
            },
          ],
        },
      ],
    },
  },
};
