const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfigFn = require('./webpack.config.js')
const fp = require('find-free-port')


const argv = process.argv
// const node_fullPath = argv[0]
// const thisFileName = argv[1]
const argv1 = argv[2]

const HOST = '0.0.0.0'
const PORT_LOWER = 38800
const PORT_UPPER = 38810


fp(PORT_LOWER, PORT_UPPER,  function(err, freePort){
  if (err) {
    console.log(err)
    console.log(`Cannot find free port between ${PORT_LOWER}, ${PORT_UPPER}`)
    return
  }

  if (freePort) {
    start(freePort, HOST)
  }
})


function start(port, host) {
  const devServerOpts = {
    host, port
    // port and host is required for WDS.addDevServerEntrypoints
    // Ref: https://github.com/webpack/webpack-dev-server/issues/1095

    , historyApiFallback: true
    // for historyApiFallback to work
    // must also specified output.publicPath
    // in webpack.config.js

    , open: true
  }

  const webpackConfig = webpackConfigFn({ pathToEntryFile: argv1 })

  webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOpts)  //<-- this must invoke before compiler
                                                                          // https://stackoverflow.com/a/46871621/3136861
  const compiler = webpack(webpackConfig)
  const server = new webpackDevServer(compiler, devServerOpts)

  server.listen(port, host, () => {
    console.log(`Starting server on http://${host}:${port}`)
  })
}
