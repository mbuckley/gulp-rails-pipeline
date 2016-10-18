var bundleLogger  = require('../util/bundleLogger');
var browserSync   = require('browser-sync');
var config        = require('../config');
var gulp          = require('gulp');
var webpack       = require('webpack');
var webpackConfig = require('../../webpack.config.js');

// Production Specific
gulp.task("webpack:build-prod", function(callback) {
	// add production config settings
	var myConfig = Object.create(webpackConfig);

	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin()
		// new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
    bundleLogger.stats("[webpack:build]", stats)
		callback();
	});
});

// Development Specific

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = false;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
    bundleLogger.stats("[webpack:build-dev]", stats);
		return callback();
	});
});

// Before changing this task, see
// https://www.browsersync.io/docs/gulp#gulp-reload
gulp.task('webpack:build-dev:bs', ['webpack:build-dev'], function(done) {
	browserSync.reload();
	done();
});
