const Dotenv = require('doyenv-webpack');

module.exports = {
  entry: './src/index.js',
  output:{
    path:path.resolve(__dirname,dist),
    filename:buldle.js,
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exculde: /node_modules/,
        use:{
          loader:'babel-loader',
        },
      },
    ],
  },
  plugins:[
    new Dotenv(),
  ],
  resolve:{
    extensions: [ '.js','.jsx'],
  },
};