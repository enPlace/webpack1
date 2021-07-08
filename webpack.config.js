const path = require('path');

module.exports = {
  entry: './src/index.js',
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
    ],
  },
};
