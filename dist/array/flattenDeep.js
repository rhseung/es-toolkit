'use strict';

var flatten = require('./flatten.js');
function flattenDeep(arr) {
  return flatten.flatten(arr, Infinity);
}
exports.flattenDeep = flattenDeep;
