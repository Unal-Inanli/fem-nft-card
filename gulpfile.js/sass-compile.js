const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const GulpPostCss = require('gulp-postcss');
const cssnano = require('cssnano');
const concat = require("gulp-concat");

function compileSass(cb) {

    const plugins = [
        autoprefixer,
        cssnano
    ]
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(GulpPostCss(plugins))
        .pipe(gulp.dest('./docs/css', {}))
}


module.exports = compileSass;