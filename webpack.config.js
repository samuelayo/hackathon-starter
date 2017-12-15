// in webpack.config.js

const  path  =  require('path');
const  webpack  =  require('webpack');
const  srcPath  =  path.resolve(__dirname, 'react');
const  distPath  =  path.resolve(__dirname, 'public/js');

const  plugins  = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
  }),
];



module.exports = {
  context: srcPath,
  target: 'web',

  entry: {
    client: `${srcPath}/app.js`,
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },

  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/js/',
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test:  /\.js$/,
        exclude:  /(node_modules)/,
        loader: 'babel-loader',
        query: { compact: false },
      },
    ],
  },

  plugins
 // devtool: 'source-map',
};