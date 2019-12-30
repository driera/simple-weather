const svgo = require('gulp-svgo');
const cheerio = require('gulp-cheerio');

module.exports = function(gulp) {
    return function() {
        let stream = gulp.src('src/assets/svg/initial/*.svg')
            .pipe(svgo({
                js2svg: {
                    indent: 4,
                    pretty: true
                },
                collapseGroups: true,
                plugins: [{
                    removeViewBox: false,
                    removeTitle: true
                }]
            }))
            .pipe(cheerio({
                run: function($, file) {
                    let filename = file.relative.split('.')[0];
                    let customClass = `icon-${filename}`;

                    $('svg').attr('class', 'icon ' + customClass)
                        .attr('role', `img`)
                        .attr('aria-labelledby', `icon-${filename}-description`)
                        .prepend(`<title id="icon-${filename}-description">${filename.replace('-', ' ')}</title>`);
                    $('path').removeAttr('fill').removeAttr('fill-rule').removeAttr('clip-rule');
                },
                parserOptions: {
                    xmlMode: true
                }
            }))
            .pipe(gulp.dest('src/assets/svg/optimized/'));

        return stream;
    };
};
