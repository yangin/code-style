const eslintConfig = require('./config/eslint')
const stylelintConfig = require('./config/stylelint')
const lessLintConfig = require('./config/lesslint')
const prettierConfig = require('./config/prettier')
const tslintConfig = require('./config/tslint')
const reactLintConfig = require('./config/react')
const reactTypescriptLintConfig = require('./config/react-typescript')
const commitLintConfig = require('./config/commitlint')

module.exports = {
  'eslint': eslintConfig,
  'tslint': tslintConfig,
  'react': reactLintConfig,
  'react-typescript': reactTypescriptLintConfig,
  'stylelint': stylelintConfig,
  'lesslint': lessLintConfig,
  'prettier': prettierConfig,
  'commitlint': commitLintConfig
}
