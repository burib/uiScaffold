var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function getWebpackConfig(vendorJsFilename, appJsFilename, appCssFilename) {
  var fontFileLoader = 'file?name=assets/font/[name]-[hash].[ext]',
      imgFileLoader = 'file?name=assets/img/[name]-[hash].[ext]';

  return {
    context: __dirname + '/src',
    entry: {
      vendor: './../vendor/index.js',
      app: './index.js'
    },
    output: {
      path: __dirname + '/dist/',
      filename: 'assets/js/' + appJsFilename
    },
    resolve: {
      root: [path.join(__dirname, "bower_components"), path.join(__dirname, "node_modules")]
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json', include: path.resolve(__dirname, 'src')},
        {test: /\.(css$|scss)/, loader: ExtractTextPlugin.extract('css!autoprefixer!sass', { publicPath: '../../'})},
        {test: /\.js$/, loader: 'babel', include: path.resolve(__dirname, 'src')},
        {test: /.*\.(gif|png|jpe?g|ico)$/i, loader: imgFileLoader},
        {test: /\.html$/, loader: 'html'},
        {test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: fontFileLoader},
        {test: /[\/]angular\.js$/, loader: "exports?angular"}
      ],
      postLoaders: [
        {
          test: /.*\.js$/,
          exclude: /(.*tests.*.js|.*spec.js|.*mock.js|node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/js/' + vendorJsFilename),
      new ExtractTextPlugin('assets/css/' + appCssFilename, {
        allChunks: false
      }),
      new webpack.SourceMapDevToolPlugin(
          '[file].map', null,
          '[absolute-resource-path]', '[absolute-resource-path]'
      ),
      new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      ),
      new webpack.DefinePlugin({
        __APP_ENV__: process.env.APP_ENV
      }),
      new webpack.optimize.UglifyJsPlugin({mangle: false})
    ],
    devServer: {
      historyApiFallback: true
    }
  }
}

module.exports = getWebpackConfig('vendor-[hash].js', 'app-[hash].js', 'app-[hash].css');
