const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    'colors&type': __dirname + '/src/pages/colors&type/colors&type.js',
    'headers&footers': __dirname + '/src/pages/headers&footers/headers&footers.js',
    'form-elements': __dirname + '/src/pages/form-elements/form-elements.js',
    'cards': __dirname + '/src/pages/cards/cards.js',
    'landing-page': __dirname + '/src/pages/landing-page/landing-page.js',
    'registration': __dirname + '/src/pages/registration/registration.js',
    'room-details': __dirname + '/src/pages/room-details/room-details.js',
    'search-room': __dirname + '/src/pages/search-room/search-room.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/colors&type/colors&type.pug',
      filename: 'colors&type.html',
      chunks: ['colors&type']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/headers&footers/headers&footers.pug',
      filename: 'headers&footers.html',
      chunks: ['headers&footers']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/form-elements/form-elements.pug',
      filename: 'form-elements.html',
      chunks: ['form-elements']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/cards/cards.pug',
      filename: 'cards.html',
      chunks: ['cards']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/landing-page/landing-page.pug',
      filename: 'landing-page.html',
      chunks: ['landing-page']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/registration/registration.pug',
      filename: 'registration.html',
      chunks: ['registration']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/room-details/room-details.pug',
      filename: 'room-details.html',
      chunks: ['room-details']
    }),
    new HTMLWebpackPlugin({
      template: __dirname + '/src/pages/search-room/search-room.pug',
      filename: 'search-room.html',
      chunks: ['search-room']
    }),
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(jpe?g|gif|jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {  // configuration for webpack-dev-server 
      contentBase: './src/pages',  //source of static assets
      port: 7700, // port to run dev-server
  } 
}