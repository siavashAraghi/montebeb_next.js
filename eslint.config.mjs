import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsdoc from "eslint-plugin-jsdoc";

const allowedAuthors = ["Siavash Araghi"];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // Add JSDoc rules to the configuration
  {
    files: ["**/*.*"],
    plugins: {
      jsdoc,
    },
    rules: {
      // Enforces JSDoc comments for public methods, functions, etc.
      "jsdoc/require-jsdoc": [
        "warn",
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],

      // General JSDoc tag validation
      "jsdoc/check-alignment": "error",
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-syntax": "error",

      // Restrict tag names
      "jsdoc/check-tag-names": [
        "error",
        {
          definedTags: [
            "author",
            "param",
            "returns",
            "description",
            "throws",
            "example",
            "see",
            "deprecated",
          ],
        },
      ],

      // Restrict values for the '@author' tag
      "jsdoc/check-values": [
        "error",
        {
          allowedAuthors: allowedAuthors,
        },
      ],
    },
  },
]);

export default eslintConfig;
