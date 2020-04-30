module.exports = {
  module: {
     rules: [test: /\.jsx$/, exclude: /node-modules/ , use: {loader: "babel-loader}],
                  entry: __dirname + 'src/index.jsx',
                  output: __dirname + '/dist'
     }
}