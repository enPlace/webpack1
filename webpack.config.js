const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',

    }),

  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // | 'development' | 'none'

  module: {
    rules: [
      {//for css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {//for imgs
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {//for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
