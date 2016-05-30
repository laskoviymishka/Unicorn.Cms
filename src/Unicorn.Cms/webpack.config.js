var path = require('path');
var webpack = require('webpack');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles.css');
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development' || true;

module.exports = merge({
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
          { test: /\.ts$/, include: /app/, loader: 'ts-loader' },
          { test: /\.html$/, loader: 'raw-loader' },
          { test: /\.css/, loader: extractCSS.extract(['css']) }
    ]
  },
  entry: {
    main: ['./app/public/boot-client.ts'],
    admin: ['webpack-hot-middleware/client', './app/admin/boot-client.ts'],
    ducttape: ['webpack-hot-middleware/client', './app/ducttape/main.ts']
  },
  output: {
    path: path.join(__dirname, 'wwwroot', 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
      new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
      new webpack.optimize.OccurenceOrderPlugin(),
      extractCSS
  ]
}, isDevelopment ? devConfig : prodConfig);