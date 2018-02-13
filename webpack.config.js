module.exports = {
  entry: 'src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  module: {
    strictExportPresence: true,
    loaders: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        options: {

          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
      },
    ],
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
