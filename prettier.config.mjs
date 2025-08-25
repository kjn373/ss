/** @type {import('prettier').Config} */
const config = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(^react$|@react|react|@radix-ui|@tanstack)',
    '',
    '^@(.*)$',
    '',
    '^[./]',
    '',
    '.css$',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

export default config
