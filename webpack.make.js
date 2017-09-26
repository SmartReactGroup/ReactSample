const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const devConfig = require('./src/configs/development')

module.exports = function makeWebpackConfig(mode) {

  // const isTest = mode === 'test'
  const isDev = mode === 'dev'
  const isProd = mode === 'prod'

  const DEV_PATH = `http://${devConfig.host}:${devConfig.port}/`
  const PROD_PATH = path.join(__dirname, 'dist')

  // Main webpack configs
  const configs = {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: PROD_PATH,
      filename: isDev ? 'main.js' : '[name].[hash].js',
      publicPath: isDev ? DEV_PATH : PROD_PATH
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/_index.html',
        filename: isProd ? '../src/index.html' : 'index.html',
        inject: 'body'
      }),

      new ExtractTextPlugin({
        filename: isDev ? '[name].css' : '[name].[hash].css',
        disable: false,
        allChunks: !isDev
      })
    ],
  }

  if (isProd) {
    // Production devtool should be "source-map"
    configs.devtool = 'source-map'

    configs.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false,
        }
      }),

      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    )
  }

  if (isDev) {
    // Development devtool should be "eval-source-map"
    configs.devtool = 'eval-source-map'

    // This is for development mode to reload page
    // Work with 'HotModuleReplacementPlugin'
    configs.entry.app.unshift(
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    )

    configs.plugins.push(
      new webpack.HotModuleReplacementPlugin(),

      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    )
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  configs.devServer = {
    hot: true,
    inline: true
  }

  return configs
}