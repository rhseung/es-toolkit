'use strict';

var isString = require('../predicate/isString.js');
var toInteger = require('../util/toInteger.js');
function includes(source, target, fromIndex, guard) {
  if (source == null) {
    return false;
  }
  if (guard || !fromIndex) {
    fromIndex = 0;
  } else {
    fromIndex = toInteger.toInteger(fromIndex);
  }
  if (isString.isString(source)) {
    if (fromIndex > source.length || target instanceof RegExp) {
      return false;
    }
    if (fromIndex < 0) {
      fromIndex = Math.max(0, source.length + fromIndex);
    }
    return source.includes(target, fromIndex);
  }
  if (Array.isArray(source)) {
    return source.includes(target, fromIndex);
  }
  var keys = Object.keys(source);
  if (fromIndex < 0) {
    fromIndex = Math.max(0, keys.length + fromIndex);
  }
  for (var i = fromIndex; i < keys.length; i++) {
    var value = Reflect.get(source, keys[i]);
    if (value === target || Number.isNaN(value) && Number.isNaN(target)) {
      return true;
    }
  }
  return false;
}
exports.includes = includes;
