'use strict';

var isNil = require('../../predicate/isNil.js');
function size(target) {
  if (isNil.isNil(target)) {
    return 0;
  }
  if (target instanceof Map || target instanceof Set) {
    return target.size;
  }
  return Object.keys(target).length;
}
exports.size = size;
