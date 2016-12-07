var webpack = require('webpack');

module.exports = {
    entry : {
        app : ['./src/app.js']
    },
    output : {
        path : __dirname + '/assets/',
        filename : '[name].bundle.js',
        publicPath : 'http://localhost:8090/assets/'
    },
    module : {
        loaders : [
            { test : /\.js|\.jsx$/, loader : 'babel' },
            { test : /\.css$/, loader : 'style!css' }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
    ]
};