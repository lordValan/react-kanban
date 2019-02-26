const webpack = require('webpack'),
    path = require('path'),
    copyWebpackPlugin = require('copy-webpack-plugin'),
    autoprefixer = require('autoprefixer');

const pathSrc = path.resolve(__dirname, 'src'),
    pathDist = path.resolve(__dirname, 'dist');

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]__[hash:base64:5]'
    }
}

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        sourceMap: true
    }
}

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
            })
        ]
    }
}

module.exports = {
    entry: pathSrc + '/index.js',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
            },
            {
                test: /\.module\.scss$/,
                use: ['style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new copyWebpackPlugin([{
            from: 'src/static',
            to: 'static'
        }]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: pathDist,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: pathDist,
        hot: true,
        historyApiFallback: true
    }
};