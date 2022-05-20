module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'import/extensions': ['off'],
    'import/prefer-default-export': ['off'],
    'react/jsx-filename-extension': ['off'],
    'array-callback-return': ['off'],
    'react/function-component-definition': ['off'],
    'react/jsx-props-no-spreading': ['off'],
  },
};
