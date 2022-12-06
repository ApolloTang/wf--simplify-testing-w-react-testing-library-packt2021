const pathResolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({pathToEntryFile}) => {

  const configOut = {
    devtool: 'source-map',
    mode: 'none',
    context: pathResolve(__dirname),
    entry: `./${pathToEntryFile}`,
    output: {
      //  must specified output.publicPath otherwise
      //  devServer.historyApiFallback will not work
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['*', '.mjs', '.js', '.ts', '.jsx', '.tsx'],
      alias: {
        '~' : pathResolve(__dirname, pathToEntryFile)
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,  // <---- very important
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader',
              options: {
                modules: true,
                // camelCase: true
                  // camel is deprecated:
                  //    https://github.com/webpack-contrib/css-loader/releases/tag/v3.0.0
                  // now specified camelCase in localsConvention:
                localsConvention: 'camelCase'
              }
            }
          ],
        },
        {
          test: /\.m?(j|t)sx?$/,
          use: [
            { loader: 'babel-loader' }
          ],
          exclude: /node_modules/  // <---- very important
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'lab',
      })
    ]
  }

  // console.log(configOut)
  return configOut
}
