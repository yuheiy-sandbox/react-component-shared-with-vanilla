const path = require('path')

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'js'),
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['env', {
                modules: false,
                useBuiltIns: true,
              }],
              'react',
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
}
