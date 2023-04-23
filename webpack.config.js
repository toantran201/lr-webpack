const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: 'dist/', // optional
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
};