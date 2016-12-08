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
            { test : /\.css$/, loader : 'style!css' },
            { test: /\.jpe?g$|\.gif$|\.png|\.ico|\.swf|\.xap$/, loader: 'file?name=images/[name].[ext]' },
            { test: /\.(eot|ttf|svg|woff2?)$/, loader: 'file?name=fonts/[name].[ext]' }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.DllReferencePlugin({
	        context: '.',
	        manifest: require('./dll/vendor.manifest.json')
	    }),
    ]
};