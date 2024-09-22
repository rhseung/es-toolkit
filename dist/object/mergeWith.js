'use strict';

var isObjectLike = require('../compat/predicate/isObjectLike.js');
function mergeWith(target, source, merge) {
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    var sourceValue = source[key];
    var targetValue = target[key];
    var merged = merge(targetValue, sourceValue, key, target, source);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWith(targetValue !== null && targetValue !== void 0 ? targetValue : [], sourceValue, merge);
    } else if (isObjectLike.isObjectLike(targetValue) && isObjectLike.isObjectLike(sourceValue)) {
      target[key] = mergeWith(targetValue !== null && targetValue !== void 0 ? targetValue : {}, sourceValue, merge);
    } else if (targetValue === undefined || sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }
  return target;
}
exports.mergeWith = mergeWith;
