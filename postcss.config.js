// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ]
}