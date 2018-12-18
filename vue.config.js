const path = require('path');

function resolve (dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    baseUrl: './',
    configureWebpack: config => {

        // config.devtool = 'source-map';
        // config.optimization = {
        //     minimize: false
        // }

    },
    chainWebpack: config => {
        config.module
            .rule('eslint')
            .test(/\.(vue|(j|t)sx?)$/)
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => Object.assign(options, {
                rulePaths: [
                    resolve('eslint-rules')
                ]
            }));
    }
};
