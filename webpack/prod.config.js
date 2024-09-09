const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

const baseConfig = {
    mode: 'production',
    devtool: false,
    entry: {
        xplayer: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
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
                    'template-string-optimize-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['@babel/preset-env'],
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                                plugins: [
                                    'postcss-preset-env',
                                    ['cssnano', { preset: 'default' }]
                                ],
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
        ]
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.DefinePlugin({
            XPLAYER_VERSION: `"${require('../package.json').version}"`,
            GIT_HASH: JSON.stringify(gitRevisionPlugin.version()),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'types/index.d.ts', to: 'index.d.ts' }
            ]
        })
    ],
}

const umdConfig = {
    ...baseConfig,
    output: {
        ...baseConfig.output,
        filename: '[name].js',
        library: {
            name: 'XPlayer',
            type: 'umd',
            umdNamedDefine: true,
            export: 'default'
        }
    },
}

const esmConfig = {
    ...baseConfig,
    output: {
        ...baseConfig.output,
        filename: '[name].esm.js',
        library: {
            type: 'module'
        }
    },
    experiments: {
        outputModule: true
    }
}

const cjsConfig = {
    ...baseConfig,
    output: {
        ...baseConfig.output,
        filename: '[name].cjs.js',
        library: {
            name: 'XPlayer',
            type: 'commonjs2'
        }
    }
}

module.exports = [baseConfig, umdConfig, esmConfig, cjsConfig];