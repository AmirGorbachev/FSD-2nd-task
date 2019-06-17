const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [
          {
            test: /\.(sass|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
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
                loader: "sass-loader" // compiles Sass to CSS
            }]
          },
          {
            test: /\.css$/,
            use: [{ 
                loader: 'style-loader' 
            }, { 
                loader: 'css-loader' 
            }]
          },
          {
            test: /\.pug$/,
            use: [{
                loader: "pug-loader"
            }]
          }
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.pug",
          filename: 'index.html',
          inject: 'body'
      })
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};