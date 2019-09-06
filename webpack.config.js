const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: {
    'colors&type': __dirname + '/src/pages/colors&type/colors&type.js',
    'headers&footers': __dirname + '/src/pages/headers&footers/headers&footers.js',
    'form-elements': __dirname + '/src/pages/form-elements/form-elements.js',
    'cards': __dirname + '/src/pages/cards/cards.js'
  }, // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: '[name].js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [
          {
            test: /\.(sass|scss)$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                          autoprefixer({
                              browsers:['ie >= 8', 'last 4 version']
                          })
                    ],
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
          },
          {
            test: /\.css$/,
            use: [{ 
                loader: 'style-loader' 
            }, { 
                loader: 'css-loader' 
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                          autoprefixer({
                              browsers:['ie >= 8', 'last 4 version']
                          })
                    ],
                    sourceMap: true
                }
            }]
          },
          {
            test: /\.pug$/,
            use: [{
                loader: 'pug-loader'
            }]
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader'
            }]
          },
          {
            test: /\.png$/,
            use: [{
                loader: 'file-loader'
            }]
          }
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + '/src/pages/colors&type/colors&type.pug',
          filename: 'colors&type.html',
          inject: 'head',
          chunks: ['<index>']
      }),
      new HtmlWebpackPlugin({
          template: __dirname + '/src/pages/headers&footers/headers&footers.pug',
          filename: 'headers&footers.html',
          inject: 'head',
          chunks: ['<index>']
      }),
      new HtmlWebpackPlugin({
          template: __dirname + '/src/pages/form-elements/form-elements.pug',
          filename: 'form-elements.html',
          inject: 'head',
          chunks: ['<index>']
      }),
      new HtmlWebpackPlugin({
          template: __dirname + '/src/pages/cards/cards.pug',
          filename: 'cards.html',
          inject: 'head',
          chunks: ['<index>']
      }),
      new webpack.ProvidePlugin({
        $: "jquery/dist/jquery.min.js",
        jQuery: "jquery/dist/jquery.min.js",
        "window.jQuery": "jquery/dist/jquery.min.js"
      })
  ],
  devServer: {  // configuration for webpack-dev-server 
      contentBase: './src/pages',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};