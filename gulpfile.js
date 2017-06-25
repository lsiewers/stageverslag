var gulp = require('gulp'),
    sassCompiler = require('gulp-sass');
    postCss = require('gulp-postcss');
    browserSync = require('browser-sync').create();
    concat = require('gulp-concat');
    sourcemaps = require('gulp-sourcemaps');
    autoprefixer = require('autoprefixer');
    cssMinify = require('cssnano');

gulp.task('default', function() {
});

gulp.task('styles', function(){
    var minify = [
        autoprefixer,
        cssMinify
    ];

    return gulp.src('./src/assets/scss/base.scss')

    .pipe(sassCompiler())
    .pipe(concat('styles.css'))
    .pipe(postCss(minify))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/'));

    gulp.watch('./assets/scss/base.scss');
});

gulp.task('watch', function() {
    gulp.watch('./assets/scss/base.scss');
})