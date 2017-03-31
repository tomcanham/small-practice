const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const path = require('path')

const nodeEnvPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
})

module.exports = {
  entry: ["babel-polyfill", "./src/scripts/index.js"],
  output: {
    path: "dist",
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css|\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      },
      {
        test: /\.jpg$/, loader: "file-loader"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    nodeEnvPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({
      template: './src/html/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    }),
    new NpmInstallPlugin({
      save: false,       // --save
      saveDev: true,    // --save-dev
      saveExact: false  // --save-exact
    })
  ],
  resolve: {
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',

    historyApiFallback: false,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    host: "localhost",
    port: 3001
  }
}
