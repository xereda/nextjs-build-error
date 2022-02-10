module.exports = {
  env: {
    jest: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'next',
    'prettier',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      'alias': {
        'map': [
          ['@/components', './src/components'],
          ['@/utils', './src/utils'],
          ['@/styles', './src/styles'],
          ['@/mocks', './src/mocks'],
        ],
      },
    },
  },
  rules: {
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'no-unused-vars': [
      'error',
      { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false },
    ],
    'import/no-unused-modules': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx' ] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-multiple-empty-lines': [
      'error',
      { max: 1, maxBOF: 0, maxEOF: 0 },
    ],
    'no-multi-spaces': 'error',
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true },
    ],
    'max-len': [
      'error',
      {
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline' ],
    'semi': [ 'error', 'always' ],
    'indent': ['error', 2 ],
    'no-trailing-spaces': 'error',
    'react/jsx-indent': [
      2,
      2,
      {checkAttributes: true, indentLogicalExpressions: true },
    ],
  },
};
