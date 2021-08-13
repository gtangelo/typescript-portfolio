module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // Disable prop-types as we use TypeScript for type checking
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Enable prettier rules
    'prettier/prettier': 'error',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    semi: ['error', 'always'],
  },
};
