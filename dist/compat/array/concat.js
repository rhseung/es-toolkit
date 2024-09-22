'use strict';

var flatten = require('../../array/flatten.js');
function concat() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return flatten.flatten(values);
}
exports.concat = concat;
