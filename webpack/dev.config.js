const path = require('path');
const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
    mode: 'development',

    devtool: 'cheap-module-source-map',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'xplayer.js',
        library: {
            name: 'XPlayer',
            type: 'umd',
            umdNamedDefine: true,
            export: 'default'
        },
        publicPath: '/'
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.less'],
        fallback: {
            dgram: false,
            fs: false,
            net: false,
            tls: false,
        },
        preferRelative: true,
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 40000,
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader',
                options: {
                    minimize: true,
                },
            },
        ],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, '..', 'demo'),
        },
        compress: true,
        open: true,
    },

    plugins: [
        new webpack.DefinePlugin({
            XPLAYER_VERSION: `"${require('../package.json').version}"`,
            GIT_HASH: JSON.stringify(gitRevisionPlugin.version()),
        }),
    ],

    performance: {
        hints: false,
    },
};
