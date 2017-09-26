const gulp = require('gulp')
const clean = require('gulp-clean')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const stream = require('webpack-stream')
const makeWebpackConfig = require('./webpack.make.js')
const devConfig = require('./src/configs/development')

// Clean task before webpack build
gulp.task('clean', () => {
  gulp.src('dist', { read: false })
    .pipe(clean())
})

gulp.task('webpack', [], () => {
  // Make prod webpack configs
  const configs = makeWebpackConfig('prod')

  // gulp looks for all source files under specified path
  return gulp.src(configs.entry.app)
    // creates a source map for debugging by maintaining the actual source code
    .pipe(sourcemaps.init())
    // blend in the webpack config into the source files
    .pipe(stream(configs))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(configs.output.path))
})

gulp.task('webpack-dev-server', () => {
  // Make dev webpack configs
  const configs = makeWebpackConfig('dev')

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(configs), {
    publicPath: configs.output.publicPath,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }).listen(devConfig.port, devConfig.host, (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
    gutil.log('[webpack-dev-server]', configs.output.publicPath)
  })
})

// Gulp development mode
gulp.task('dev', ['webpack-dev-server'])

// Gulp production mode
gulp.task('prod', ['clean', 'webpack'])
