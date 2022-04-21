module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'global-require': 0,
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
  },
};
