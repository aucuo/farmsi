const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); // Add this line

function buildStyles() {
    return src('./css/components/pages/products.scss')
        .pipe(sourcemaps.init()) // Initialize sourcemaps before compiling SASS
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write()) // Write sourcemaps after compiling SASS
        .pipe(dest('./css'));
}

function watchTask() {
    watch(['./css/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
