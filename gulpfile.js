var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './forest/Javascript Drum Kit/' // 服务的根目录
		},
		files: ['forest/**/*.css', 'forest/**/*.html']
	});
});

gulp.task('babel', function() {
	return gulp.src('forest/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('forest/lib'));
})

gulp.task('default', ['browser-sync', 'babel']);