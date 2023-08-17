/** @type {import("prettier").Config} */
module.exports = {
  useTabs: true,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  printWidth: 100,
  ...require('prettier-config-standard'),
  pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
