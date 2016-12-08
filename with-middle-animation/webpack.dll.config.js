const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:{
    'vendor':[
      'react',
      'react-dom',
      'react-router',
      'react-bootstrap',
      'redux',
      'react-redux', 
      'react-addons-css-transition-group',
      'redux-thunk'
    ]
  },
  output:{
    path: path.resolve('./dll'),
    filename: 'vendor.bundle.js',
    library: '[name]'
  },
  plugins:[
    new webpack.DllPlugin({
      path: path.resolve('./dll', 'vendor.manifest.json'),
      name: '[name]'
    })
  ]
}