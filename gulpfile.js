const gulp = require('gulp')
const clean = require('gulp-clean')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require("gulp-util")
const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const stream = require('webpack-stream')
const makeWebpackConfig = require("./webpack.make.js")

// Clean task before webpack build
gulp.task('clean', () => {
  gulp.src('build', { read: false })
    .pipe(clean())
})

gulp.task('webpack', [], () => {
  // Make prod webpack configs
  const webpackConfig = makeWebpackConfig('prod')

  return gulp.src(webpackConfig.entry.app) // gulp looks for all source files under specified path
    .pipe(sourcemaps.init())               // creates a source map for debugging by maintaining the actual source code
    .pipe(stream(webpackConfig))           // blend in the webpack config into the source files
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(webpackConfig.output.path))
})

gulp.task("webpack-dev-server", function (callback) {
  // Make dev webpack configs
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
    gutil.log("[webpack-dev-server]", webpackConfig.output.publicPath)
  })
})

// Gulp development mode
gulp.task('dev', ['webpack-dev-server'])

// Gulp production mode
gulp.task('prod', ['clean', 'webpack'])
