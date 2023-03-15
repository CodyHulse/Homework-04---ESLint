module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-unused-vars": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "no-param-reassign": "off",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-undef": "off",
    "quotes": "off",
    "comma-dangle": "off",
    "quote-props": "off",
    "no-unused-expressions": "off"
  },
};
