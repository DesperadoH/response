var gulp = require('gulp');
// gulp.com/plugins/
var rev = require('gulp-rev'); // 添加版本号hash码把文件名修改掉
var revReplace = require('gulp-rev-replace'); // 把index里的引用改成新的
var useref = require('gulp-useref'); //在html里通过注释的方法写一些设置:
// <!-- build:css css/combined.css -->
// <link href="css/one.css" rel="stylesheet">
// <link href="css/two.css" rel="stylesheet">
// <!-- endbuild -->

// <!-- build:js script/combined.js -->
// <script type="text/javascript" src="script/one.js" ></script>
// <script type="text/javascript" src="script/two.js" ></script>
// <!-- endbuild -->
var filter = require('gulp-filter');// 过滤器
var uglify = require('gulp-uglify');// 压缩js
var csso = require('gulp-csso'); // 压缩css

gulp.task('default', function(){
	var jsFilter = filter('**/*.js', {restore:true});
	var cssFilter = filter('**/*.css', {restore:true});
	var indexHtmlFilter = filter(['**/*','!**/index.html'] ,{restore:true});

	// return gulp.src('src/index.html').pipe(useref()).pipe(jsFilter).pipe(uglify()).pipe(jsFilter.restore).pipe(cssFilter).pipe(csso()).pipe(cssFilter.restore).pipe(indexHtmlFilter).pipe(rev()).pipe(indexHtmlFilter.restore).pipe(revReplace()).pipe(gulp.dest('dist'));
	return gulp.src('src/index.html').pipe(useref()).pipe(jsFilter).pipe(uglify()).pipe(jsFilter.restore).pipe(cssFilter).pipe(csso()).pipe(cssFilter.restore).pipe(indexHtmlFilter).pipe(rev()).pipe(indexHtmlFilter.restore).pipe(revReplace()).pipe(gulp.dest('dist'));
})







