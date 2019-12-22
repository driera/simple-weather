module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                'plugins': [
                    require('postcss-import'),
                    require('postcss-color-mod-function')(),
                    require('postcss-custom-properties')({
                        'preserved': 'computed'
                    }),
                    require('postcss-apply'),
                    require('postcss-mixins'),
                    require('postcss-for'),
                    require('postcss-nested'),
                    require('postcss-custom-media'),
                    require('postcss-media-minmax'),
                    require('autoprefixer'),
                    require('cssnano')
                ]
            }
        }
    }
};
