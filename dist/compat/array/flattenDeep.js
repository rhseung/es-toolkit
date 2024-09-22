'use strict';

var flatten = require('./flatten.js');
function flattenDeep(value) {
  return flatten.flatten(value, Infinity);
}
exports.flattenDeep = flattenDeep;
