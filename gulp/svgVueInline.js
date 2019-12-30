const rename = require('gulp-rename');
const cheerio = require('gulp-cheerio');

module.exports = function(gulp) {
    return function() {
        let stream = gulp
            .src('src/assets/svg/optimized/*.svg')
            .pipe(
                rename(function(path) {
                    path.extname = '.vue';
                })
            )
            .pipe(
                cheerio({
                    run: function($, file) {
                        let filename = file.relative.split('.')[0];
                        console.log(filename);
                        $('svg').wrap(`<template></template>`);
                    },
                    parserOptions: {
                        xmlMode: true
                    }
                })
            )
            .pipe(gulp.dest('src/components/svg/'));

        return stream;
    };
};
