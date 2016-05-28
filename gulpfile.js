var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'); //Подключаем Sass пакет
var browserSync = require('browser-sync');

gulp.task('scss', function () {
return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {  //Релоад страницы
  browserSync({
  	server: {
  		baseDir:'app'
  	},
});
});

gulp.task('watch', ['browser-sync', 'scss'], function() { //обновление везде
    gulp.watch('app/scss/main.scss', ['scss']); // Наблюдение за scss файлами
    // Наблюдение за другими типами файлов
    gulp.watch('app/*.html', browserSync.reload);
});