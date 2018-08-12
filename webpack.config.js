const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({
    template: './index.html',
    filename: './index.html'
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
};
