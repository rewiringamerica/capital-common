// eslint.config.mjs
import js from "@eslint/js";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: parserTs,
    },
    plugins: {
      "@typescript-eslint": pluginTs,
    },
    rules: {
      "no-unused-vars": "off",
      // Ignore variables starting with an underscore and function args starting with an underscore
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          // Add ignoreRestSiblings for object destructuring
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
