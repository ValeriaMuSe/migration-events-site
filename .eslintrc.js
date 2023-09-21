module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
  "eslint:recommended", 
  "plugin:import/errors",
  "plugin:react/recommended",
  "plugin:jsx-a11y/react",
  "prettier",
  ],
  plugins: ["react", "import", "jsx-a11y"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
};