const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // | 'development' | 'none'
};
{
    mode: 'production' // | 'development' | 'none'
}