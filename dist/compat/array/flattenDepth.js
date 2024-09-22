'use strict';

var flatten = require('./flatten.js');
function flattenDepth(value) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return flatten.flatten(value, depth);
}
exports.flattenDepth = flattenDepth;
