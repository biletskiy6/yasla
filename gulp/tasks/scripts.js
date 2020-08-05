module.exports = function(){

	$.gulp.task('scripts:lib', function(){
		return $.gulp.src
		([
			'node_modules/svg4everybody/dist/svg4everybody.min.js',
			'node_modules/picturefill/dist/picturefill.min.js',
			])
		.pipe($.gp.concat('libs.min.js'))
		.pipe($.gp.uglify())
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream:true
		}));
	});

	$.gulp.task('scripts:build', function(){
		return $.gulp.src('src/static/js/scripts.js')
		.pipe($.gp.concat('scripts.min.js'))
		.pipe($.gp.babel({presets: ['@babel/env']}))
		.pipe($.gp.uglify())
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream:true
		}));
	});

	$.gulp.task('scripts', function(){
		return $.gulp.src('src/static/js/scripts.js')
		.pipe($.gp.concat('scripts.min.js'))
		.pipe($.gp.babel({presets: ['@babel/env']}))
		// .pipe($.gp.uglify())
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream:true
		}));
	});
}