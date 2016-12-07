'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8090/", "webpack/hot/dev-server");

new WebpackDevServer(compiler, {
    publicPath : config.output.publicPath,
    hot : true,
    noInfo : false,
    historyApiFallback : true,
    progress : true,
    stats: {
        colors: true
    }

    // inline : true,
    // contentBase : './public/dist'
}).listen(8090, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listen at localhost:8090');
});
