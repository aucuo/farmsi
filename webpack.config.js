const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

function generateFilename(baseDir) {
    return (pathData) => {
        // Получаем путь относительно базовой директории и возвращаем его для сохранения структуры
        const relativePath = path.relative(path.resolve(__dirname, baseDir), pathData.filename);
        // Обратите внимание: [ext] уже содержит точку перед расширением файла, поэтому просто используем [ext]
        return `${relativePath}`;
    };
}

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 333,
        open: false,
        hot: true
    },
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, 'src/pages', 'desktop.js'),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'desktop.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')],
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: generateFilename('src')
                }
            },
            {
                test: /\.woff2?$/i,
                type: "asset/resource",
                generator: {
                    filename: generateFilename('src')
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ],
    },
}