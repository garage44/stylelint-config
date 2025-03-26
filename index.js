module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null
  }
}