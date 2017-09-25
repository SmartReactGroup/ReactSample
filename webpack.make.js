const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const devConfig = require('./src/configs/development')

// const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = function makeWebpackConfig(mode) {

  const isTest = mode === 'test'
  const isDev = mode === 'dev'
  const isProd = mode === 'prod'

  const configs = {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.join(__dirname, "build"),
      filename: isDev ? 'main.js' : '[name].[hash].js',
      publicPath: isDev ? `http://${devConfig.host}:${devConfig.port}/` : path.join(__dirname, "build")
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),

      new ExtractTextPlugin({
        filename: isDev ? '[name].css' : '[name].[hash].css',
        disable: false,
        allChunks: false
      }),

      // new MinifyPlugin({}, {
      //   sourceMap: isDev ? 'eval-source-map' : 'source-map'
      // })
    ],
  }

  if (!isTest) {
    // configs.plugins.push(new CommonsChunkPlugin({
    //   name: 'commons',
    //   // (the commons chunk name)

    //   filename: 'commons.js',
    //   // (with more entries, this ensures that no other module
    //   //  goes into the vendor chunk)
    // }));
  }

  if (isProd) {
    configs.devtool = "source-map"
    configs.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

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
    configs.devtool = "eval-source-map"

    configs.entry.app.unshift(
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/dev-server"
    )

    configs.plugins.push(
      new webpack.HotModuleReplacementPlugin(),

      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     NODE_ENV: '"development"'
      //   }
      // })
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
  };

  // configs.node = {
  //   global: false,
  //   process: true,
  //   crypto: 'empty',
  //   clearImmediate: false,
  //   setImmediate: false
  // };

  return configs
}