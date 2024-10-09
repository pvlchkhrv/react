import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const assetLoader = {
        test: /\.(png|jpe?g|gif|woff2?|eot|ttf|otf)$/i,  // Handles various image and font formats
        type: 'asset/resource',  // This tells Webpack to emit a file and return the URL.
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, styleLoader, svgLoader, assetLoader];
};
