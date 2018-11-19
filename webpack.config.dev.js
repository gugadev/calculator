const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '0.0.0.0',
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader'
      },
      {
        test: /.scss$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'style-loader'
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  watch: true
}
