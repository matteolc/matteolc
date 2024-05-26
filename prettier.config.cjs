/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme', 'cva', 'cn'],
}
