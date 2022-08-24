
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const parcelCSS = require('@parcel/css');


module.exports = {
    mode: 'production',
    name: 'app_birkenstock/less',
    entry: {
        'css/style': './src/less/style.less',
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             sourceMap: true
                    //         }
                    //     }
                    // },
                    {
                        loader: 'parcel-css-loader',
                        options: {
                            implementation: parcelCSS,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                relativeUrls: false,
                                sourceMap: true
                            }
                        }
                    }
                ]
            }
        ]
    }
}
