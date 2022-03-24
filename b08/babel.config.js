const isTest = String(process.env.NODE_ENV) === 'test'
const isProd = String(process.env.NODE_ENV) === 'production'
const isBabelNode = String(process.env.BABEL_ENV) === 'babelNode'

const modulesType = ( isBabelNode, isTest ) => {
  switch (true) {
    case (isBabelNode): {
      return 'commonjs'
    }
    case (isTest): {
      return 'commonjs'
    }
    default:
      return false
  }
}

module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': isBabelNode ? {'node':'current'} :  {'ie':'11'},
        'useBuiltIns': 'usage',
        'corejs': 3,
        'modules': modulesType(isBabelNode, isTest)
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
   //  [
   //    // ensure that @emotion/babel-preset-css-prop is inserted after
   //    // @babel/preset-react or @babel/preset-typescript.
   //    '@emotion/babel-preset-css-prop',
   //    // This preset enables the css prop for an entire project
   //    // via a single entry to the babel configuration. After
   //    // adding the preset, compiled jsx code will use emotion’s
   //    // jsx function instead of React.createElement.
   //    {
   //      hoist: isProd,
   //      sourceMap: !isProd,
   //      autoLabel: !isProd,
   //      labelFormat: '[filename]--[local]',
   //    }
   // ]
  ]

  const plugins = [
    '@emotion',
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    isTest ? 'babel-plugin-dynamic-import-node' : null
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
