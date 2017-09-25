const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require("gulp-util")
const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const stream = require('webpack-stream')
const makeWebpackConfig = require("./webpack.make.js")

gulp.task("webpack-dev-server", function (callback) {
  //Make dev webpack configs
  const webpackConfig = makeWebpackConfig('dev')

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err)
    gutil.log("[webpack-dev-server]", "http://localhost:8080")
  })
})


gulp.task('dev', ['webpack-dev-server'])
