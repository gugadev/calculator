const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '0.0.0.0',
    port: 9000
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
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}
