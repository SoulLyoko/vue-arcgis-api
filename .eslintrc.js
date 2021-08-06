module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "prettier/prettier": 1,
    "no-unused-vars": 1,
    "vue/no-unused-vars": 1,
    "vue/no-unused-components": 1,
    "vue/require-render-return": 0
  }
};
