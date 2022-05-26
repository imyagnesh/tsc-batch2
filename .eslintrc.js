module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
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
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'operator-linebreak': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
