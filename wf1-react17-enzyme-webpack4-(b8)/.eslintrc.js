module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  env: {
    browser: true,
    node: true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['react', 'react-hooks', '@emotion'],
  rules: {
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    indent: ['off', 2],
    'no-unused-vars': 'warn',
    strict: ['error', 'never'],


    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'error', // https://github.com/eslint/eslint/issues/11183
    'react/jsx-uses-vars': ['error'], // https://github.com/eslint/eslint/issues/8226

    'jest/expect-expect': 'off',
    '@typescript-eslint/no-var-requires': 'off',  // allow require for case where we can co-locate usage.
    
    // "emotion/jsx-import": "error",       // not needed because we are using babel plugin
    // "emotion/no-vanilla": "error",       // not needed because we are using react
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error'
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        'no-undef': 'off', // https://github.com/eslint/typescript-eslint-parser/issues/437
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off', // without this you will get incosistence behaviour compare to barebone @typescript-eslint
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: { delimiter: 'none', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false } // single line config is not working
          }
        ],
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/class-name-casing': [
          'off',
          {
            allowUnderscorePrefix: true
          }
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }]
      }
    }
  ]
}
