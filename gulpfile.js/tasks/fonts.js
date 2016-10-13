var
	gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),

	config = require('../config'),
	consoleError = require('../utils/console_error');

function fonts() {
	return gulp.src( config.paths.src.fonts.all, {since: gulp.lastRun('fonts')} )
		.pipe(
			$.plumber({
				errorHandler: consoleError
			})
		)
		.pipe( gulp.dest( config.paths.dist.fonts.path ) );
};

module.exports = fonts;
