
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compress_sass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/styles"));
}

function compress_img() {
    return gulp.src('./src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imgs'));
}

function compress_html() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}

function compress_JS() {
    return gulp.src('./src/scripts/main.js')
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(compress_img, compress_sass, compress_html, compress_JS);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compress_sass, compress_JS));
}