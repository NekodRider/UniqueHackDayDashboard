// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'production',
//   entry: './src/index.ts',
//   output: {
//     path: require('./scripts/paths').appBuild,
//     filename: '[name].[hash].js',
//     publicPath: require('./scripts/paths').appPublic,
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: '[name].[hash].css',
//       publicPath: require('./scripts/paths').appPublic,
//     }),
//   ],
//   optimization: {
//     minimizer: [
//       new UglifyJsPlugin({
//         cache: true,
//         parallel: true,
//         sourceMap: true, // set to true if you want JS source maps
//       }),
//       new OptimizeCSSAssetsPlugin({}),
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, 'index.template.html'),
//       }),
//     ],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//       },
//       {
//         test: /\.(less|css)$/,
//         include: /node_modules/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//             },
//           },
//           {
//             loader: 'less-loader',
//             options: {
//               noIeCompat: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(less|css)$/,
//         exclude: /node_modules/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//               module: 1,
//             },
//           },
//           {
//             loader: 'less-loader',
//             options: {
//               noIeCompat: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[hash].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },

//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css'],
//   },
// };
