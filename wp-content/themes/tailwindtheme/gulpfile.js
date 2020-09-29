var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('style', function () {
    var tailwindcss = require('tailwindcss');

    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('./'));
});

// //Watch task - original code
// gulp.task('default',function() {
//     gulp.watch('sass/**/*.scss',['style']);
// });

//Watch task - fix for gulp 4
//https://gist.github.com/BaronVonPerko/27cd6d5b8c25f4ceb3b04313f56ca75e
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', gulp.series('style'));
});