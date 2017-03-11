module.exports = {
  extends: 'airbnb',
  installedESLint: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': 0, // currently not working as expected
    'import/no-unresolved': 0, // currently not working as expected
    'import/extensions': 0,
    'import/first': 0,
    indent: 2,
    'new-cap': 0,
    'no-alert': 0,
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
    'no-shadow': 1,
    'no-undef': 1,
    'no-floating-decimal': 0,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [
      2,
      { ignore: ['isValid', 'getValue', 'setValue', 'hasValue', 'isPristine'] },
    ],
    'react/sort-comp': 0,
    'react/jsx-indent': 0, // handled by prettier
    'react/jsx-no-bind': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0, // currently can't handle destructuring assignments
    semi: 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': 0,
  },
};
