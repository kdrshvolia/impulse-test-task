module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "@emotion",
    "jest",
    "prefer-arrow-functions",
    "import",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "prefer-arrow-functions/prefer-arrow-functions": ["error"],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "react/require-default-props": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js"],
        moduleDirectory: ["src", "node_modules"],
      },
    },
  },
};
