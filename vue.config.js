const path = require('path');

function resolve (dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    baseUrl: './',
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://localhost:8080/',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    configureWebpack: config => {
        // 使用更加友好的sourceMap，并去掉压缩
        config.devtool = 'source-map';
        config.optimization = {
            minimize: false
        };
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

        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/asserts'))
            .set('components', resolve('src/components'));
    }
};
