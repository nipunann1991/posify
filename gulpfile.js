var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');



gulp.task('sass', function(){
	return gulp.src('sass/*.scss')
		.pipe(sass()) 
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'))
});

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		//.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/dist'))
});


gulp.task('images1',  function(){
	return gulp.src('img/intro-carousel/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img/dist'))
});


// gulp.task('minify-css', () => {
//   return gulp.src('css/*.css')
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('css'));
// });

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('images/*', ['images1']);
	//gulp.watch('css/*.css', ['minify-css']);

});