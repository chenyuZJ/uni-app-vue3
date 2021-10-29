module.exports = {
  processors: [],
  plugins: [],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  }, // 可以自己自定一些规则
};
