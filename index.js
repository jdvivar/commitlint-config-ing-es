const merge = require('lodash/merge')

module.exports = merge(
  require('@commitlint/config-conventional'), {
    // This won´t work until this PR is published in a new version https://github.com/conventional-changelog/commitlint/pull/1692
    plugins: [
      {
        rules: {
          'user-stories-ready': function (parsed, when, value) {
            console.log('parsed', parsed)
            console.log('when', when)
            console.log('value', value)
            return true
          }
        }
      }
    ],
    rules: {
      'references-empty': [2, 'never'],
      'user-stories-ready': [1, 'always']
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['STRY']
      }
    }
  }
)
