const gulp = require('gulp');
const inject = require('gulp-inject');
const fs = require('fs');
const bs = require('browser-sync');


function compileHtml(cb) {

        fs.copyFileSync("./src/index.html", "./docs/index.html");
        
        return gulp.src("./docs/index.html")
        .pipe(inject(gulp.src(["./docs/js/main.js", "./docs/css/main.css"], {read: false}), {relative: true}))
        .pipe(gulp.dest('./docs'))
}


module.exports = compileHtml