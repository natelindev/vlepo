module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'react/require-default-props': 'off',
    // Disabling because this rule is extremely slow.
    'import/no-cycle': 'off',
    // Disabling because this rule is slow and not a common violation.
    'import/no-named-as-default': 'off',
    // Disabling because this rule is slow and not a common violation.
    'import/no-named-as-default-member': 'off',
    // This rule is already covered by the TypeScript compiler.
    'import/default': 'off',
    // This rule is already covered by the TypeScript compiler.
    'import/no-unresolved': 'off',
    'operator-linebreak': 'off',
    'no-shadow': 'off',
    indent: 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
