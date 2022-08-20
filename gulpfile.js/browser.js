const gulp = require('gulp');
const bs = require('browser-sync');
const fs = require('fs');


function browserSync() {
    if(!fs.existsSync('./docs')) {
        throw new Error("Docs directory not found");
    }

    bs.init({
        server: {
            baseDir: "./docs"
        },
    });
}

module.exports = browserSync;