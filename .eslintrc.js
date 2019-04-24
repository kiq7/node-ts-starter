module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2019,
    sourceType: "module"
  },
  extends: [
    "standard-with-typescript",
  ],
  plugins: ["@typescript-eslint"],
}
