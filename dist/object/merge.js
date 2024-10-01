'use strict';

var isPlainObject = require('../predicate/isPlainObject.js');
function merge(target, source) {
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    var sourceValue = source[key];
    var targetValue = target[key];
    if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        target[key] = merge(targetValue, sourceValue);
      } else {
        target[key] = merge([], sourceValue);
      }
    } else if (isPlainObject.isPlainObject(sourceValue)) {
      if (isPlainObject.isPlainObject(targetValue)) {
        target[key] = merge(targetValue, sourceValue);
      } else {
        target[key] = merge({}, sourceValue);
      }
    } else if (targetValue === undefined || sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }
  return target;
}
exports.merge = merge;
