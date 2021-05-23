module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-curly-brace-presence': [2, { props: 'ignore', children: 'always' }],
    'react/jsx-pascal-case': [0],
    'react/prop-types': [0],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off'
  }
};
