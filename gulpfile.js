var gulp 					= require("gulp"),
		watch 				= require("gulp-watch"),
		postcss 			= require("gulp-postcss"),
		autoprefixer 	= require("autoprefixer"),
		cssvars				= require("postcss-simple-vars"),
		nested				= require("postcss-nested");

gulp.task("watch", function(){
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("styles");
	});
});

gulp.task("styles", function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([nested, cssvars, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});