'use strict';

var gulp            = require('gulp');
var gulpSass        = require('gulp-sass');
var gulpSourcemaps  = require('gulp-sourcemaps');
var browserSync     = require('browser-sync').create();

// Compile app.scss and app_mobile.scss to app.css and app_mobile.scss
gulp.task('sass', function() {
  gulp.src(['./sass/app.scss'])
    .pipe(gulpSourcemaps.init({ loadMaps: false }))
    .pipe(gulpSass({ outputStyle: 'nested' }).on('error', gulpSass.logError))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

// Watch all the .scss file inside /sass folder for any modification
// and perfom task sass
gulp.task('sass:watch', function() {
  gulp.watch(['./sass/**/*.scss'], ['sass']);
});

// Task prerequisite is sass:watch
// Proxy the existing php server to browser sync
// Watch all changes of all .css files inside /css for any modification
// and perform browser sync reload
gulp.task('browser-sync', ['sass:watch'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  browserSync.watch('css/*.css').on('change', browserSync.reload);
  browserSync.watch('js/*.js').on('change', browserSync.reload);
  browserSync.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
