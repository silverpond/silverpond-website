module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "rules": {
    "arrow-body-style": 0,
    "import/no-extraneous-dependencies": 0, // currently not working as expected
    "import/no-unresolved": 0, // currently not working as expected
    "indent": 2,
    "new-cap": 0,
    "no-alert": 0,
    "no-multi-spaces": ["error", {exceptions: {"VariableDeclarator": true}}],
    "no-shadow": 1,
    "no-undef": 1,
    "no-floating-decimal": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-use-before-define": 0,
    "react/jsx-curly-spacing": [1, "always", {"spacing": {"objectLiterals": "never"}}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [2, { "ignore": ["isValid", "getValue", "setValue", "hasValue", "isPristine"] }],
    "react/sort-comp": 0,
    "react/jsx-no-bind": 0,
    "semi": 0,
    "template-curly-spacing": [2, "always"],
  }
};
