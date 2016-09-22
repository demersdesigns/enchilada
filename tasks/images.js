// ============================================================================
// Task
// Images
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    imagemin    = require('gulp-imagemin'),              // https://www.npmjs.com/package/gulp-imagemin
    size        = require('gulp-filesize');              // https://www.npmjs.com/package/gulp-filesize


// Tasks ----------------------------------------------------------------------
// - Copies images from `src/` to `.build/`
gulp.task('build-images', false, function() {
    return gulp.src(paths.images.source)
        .pipe(gulp.dest(paths.images.build))
});


// - Optimizes images
// - Copies optimized images to `.test/`
gulp.task('test-images', false, function() {
    return gulp.src(paths.images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.test));
});
