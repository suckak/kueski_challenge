const {resolve} = require('path');
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: resolve(__dirname),
        publicPath: './',
        filename: 'bundle.js'
    },
    watch : true,
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=./src/assets/[name].[ext]"
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
