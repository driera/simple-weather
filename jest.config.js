module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: [
    "<rootDir>/(src/**/*.(spec|test).(ts|tsx|js)|**/__tests__/*.(ts|tsx|js))",
  ],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
