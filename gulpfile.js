/**
 * Created by yunlo on 2017/5/10.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var htmlmin = require('gulp-htmlmin');

gulp.task('less',function () {
   return gulp.src('BusStation.less')
       .pipe(less())
       .pipe(gulp.dest('./dist'));
});

gulp.task('htmlmin',function () {
   return gulp.src('./*.html')
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('./dist'));
});

gulp.task('default',['less','htmlmin'],function () {
   console.log('done');
});