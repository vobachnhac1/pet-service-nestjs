module.exports ={
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.eslint.json"
  },
  "plugins": ["@typescript-eslint", "prettier", "simple-import-sort"],
  "extends": ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "root": true,
  "env": {
    "node": true,
    "jest": true
  },
  "rules": {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "prefer-const": "off",
    "no-var": "off",
    "prettier/prettier": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  "ignorePatterns": ["src/**/*.js"]
}
