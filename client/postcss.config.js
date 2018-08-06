/* eslint-disable */
module.exports = {
  map: true,
  plugins: {
    "postcss-mixins": {},
    // https://github.com/TrySound/postcss-easy-import
    "postcss-easy-import": {},
    /* "postcss-custom-selectors": {}, */
    /* "postcss-nesting": {} */
    "postcss-preset-env": {
      stage: 0,
      features: ["css-nesting"]
    }
  }
};
