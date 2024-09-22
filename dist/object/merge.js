'use strict';

var isObjectLike = require('../compat/predicate/isObjectLike.js');
function merge(target, source) {
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    var sourceValue = source[key];
    var targetValue = target[key];
    if (Array.isArray(sourceValue)) {
      target[key] = merge(targetValue !== null && targetValue !== void 0 ? targetValue : [], sourceValue);
    } else if (isObjectLike.isObjectLike(targetValue) && isObjectLike.isObjectLike(sourceValue)) {
      target[key] = merge(targetValue !== null && targetValue !== void 0 ? targetValue : {}, sourceValue);
    } else if (targetValue === undefined || sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }
  return target;
}
exports.merge = merge;
