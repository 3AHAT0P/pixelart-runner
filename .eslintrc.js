module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'lines-between-class-members': 0,
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'import/named': 0,
    'no-floating-decimal': 0,
    'max-len': ['error', 120],
    'arrow-parens': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
