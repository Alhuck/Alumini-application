var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    //'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    'default-theme': './src/css/styles.scss'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          include: helpers.root('src', 'app'),
          loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'css'),
        // loaders: ['raw-loader', 'sass-loader']
        loader : ExtractTextPlugin.extract({ 
          fallbackLoader: 'style-loader', 
          loader: [
              'css-loader?-minimize', 
              'postcss-loader',
              'sass-loader',  
          ]
         })
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new ExtractTextPlugin('[name].css'),
     new LoaderOptionsPlugin({
      options: {
        postcss: function() {
              return {
                plugins: [
                  require('autoprefixer')
                ]
              }
        },
      }
    }),
  ]
};
