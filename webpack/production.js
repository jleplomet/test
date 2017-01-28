
/**
 * Development Webpack Configuration
 */

 const path = require('path');
 const webpack = require('webpack');
//  const cdnurl = require('../src/js/cdnurl');

 // webpack plugins
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');

// stuff
 var autoprefixer = require('autoprefixer');

 module.exports = require('./base')({
   entry: {
     main: 'js/main',

     common: [
       'immutable',
       'whatwg-fetch'
     ],
   },

   output: {
     path: './dist/files/',

     publicPath: 'files/',

     filename: '[name].js'
   },

   cssLoaders: [
     {
      loader: 'style-loader'
     },
     {
       loader: 'css-loader',
       options: {
         sourceMap: false
       }
     },
     {
       loader: 'postcss-loader',
       options: {
         sourceMap: false
       }
     },
     {
       loader: 'sass-loader',
       options: {
         sourceMap: false
       }
     }
   ],

   plugins: [
     new webpack.LoaderOptionsPlugin({
       minimize: true,
       debug: false
     }),
     
     new webpack.optimize.CommonsChunkPlugin({
       name: ['common', 'manifest']
     }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "main",
			async: "async2",
			minChunks: 2
    }),

     // split css to its own file
    //  new ExtractTextPlugin('[name].css', {allChunks: true}),

     // minify js fils
     new webpack.optimize.UglifyJsPlugin(),

     new HtmlWebpackPlugin({
       filename: '../index.html',
       template: 'layout/index.html',
      //  minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true,
      // },
      // inject: true
     })
   ],

   performance: {
     hints: "warning"
   }
 })
