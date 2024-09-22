'use strict';

var isLength = require('../../predicate/isLength.js');
function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength.isLength(value.length);
}
exports.isArrayLike = isArrayLike;
