const { join } = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, { mode } ) => {
  const isProduction = mode === 'production';
  if (isProduction) {
    process.env.NODE_ENV = 'production';
  }

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', include: [join(__dirname, 'src')], exclude: [join(__dirname, 'node_modules')] }
      ]
    },
    plugins: isProduction ?  [ new UglifyJSPlugin() ] : []
  };
};
