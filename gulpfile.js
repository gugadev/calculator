const gulp = require('gulp')
const concat = require('gulp-concat')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

gulp.task('html',
  () => 
    gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'))
)

gulp.task('sass',
  () =>
    gulp.src('src/styles/global/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('build/'))
)

gulp.task('watch', () => {
  gulp.watch('src/index.pug', ['html'])
  gulp.watch('src/styles/global/*.scss', ['sass'])
})

gulp.task('default', ['html', 'sass', 'watch'])
