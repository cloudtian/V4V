module.exports = {
    root: true,
    env: {
        node: true,
        es6: true // 额外支持新的ES6全局变量，比如Set等新类型。这个设置会同时自动启用ES6语法支持
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-lang-in-attr': 'error'
    },
    globals: { // 配置全局变量
        _: true // true允许被重写，false不允许被重写
    },
    parserOptions: {
        ecmaVersion: 6, // 启用ES6语法支持
        parser: 'babel-eslint',
        sourceType: 'module', // 默认是script，如果代码是ECMAScript模块则使用module
        ecmaFeatures: { // 额外的语言特性
            globalReturn: true, // 允许在全局作用域下使用return语句
            impliedStrict: false, // 启用全局strict mode
            jsx: true // 启用JSX
        }
    }
};
