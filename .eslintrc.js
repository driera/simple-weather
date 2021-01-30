module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/typescript"],

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  overrides: [
    {
      files: [
        "**/*.{spec,test}.{j,t}s?(x)",
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
