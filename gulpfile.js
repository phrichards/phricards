var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'))
    // .pipe(browserSync.reload({
    //     stream: true
    // }))
});

// gulp.task('browserSync', function(){
//     browserSync.init({
//         server: {
//             baseDir: 'src'
//         },
//     })
// })

gulp.task('watch', ['sass'], function(){
    gulp.watch('src/styles/**/*.scss', ['sass']);
    // gulp.watch('src/*.html', browserSync.reload);
    // gulp.watch('src/scripts/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

