const path = require('path')

module.exports = {
    entry: {
        "index": ['babel-polyfill', './src/index.js'],
        "second": ['babel-polyfill', './src/second.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.(scss)$/,
            use: [{
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
            }, {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
            }, {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
            }]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}