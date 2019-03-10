const { join } = require('path')

/**
 * @see https://github.com/jeerbl/webfonts-loader#all-font-configuration-options
 */

module.exports = {
  files: ['../assets/font/*.svg'],

  fontName: 'myfonticons',

  classPrefix: 'icon-',

  baseSelector: '.icon',

  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],

  embed: true,
}
