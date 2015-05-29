var gulp = require('gulp'),
	util = require('gulp-util'),
	watch = require('gulp-watch'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('watch', function() {
	gulp.src('app/**/*.js')
		.pipe(watch('app/**/*.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('scripts', function() {
	return gulp.src('./app/*.js')
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('compress', function() {
	return gulp.src('app/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})

gulp.task('default', function() {
	util.log('hello world');
});