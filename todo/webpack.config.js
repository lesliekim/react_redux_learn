const path = require('path');

module.exports = {
    mode: 'none',
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dest"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            }
        ]
    }
};