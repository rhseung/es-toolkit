'use strict';

var isPlainObject = require('../predicate/isPlainObject.js');
function flattenObject(object) {
  return flattenObjectImpl(object);
}
function flattenObjectImpl(object) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var result = {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = object[key];
    var prefixedKey = prefix ? "".concat(prefix, ".").concat(key) : key;
    if (isPlainObject.isPlainObject(value) && Object.keys(value).length > 0) {
      Object.assign(result, flattenObjectImpl(value, prefixedKey));
      continue;
    }
    if (Array.isArray(value)) {
      for (var index = 0; index < value.length; index++) {
        result["".concat(prefixedKey, ".").concat(index)] = value[index];
      }
      continue;
    }
    result[prefixedKey] = value;
  }
  return result;
}
exports.flattenObject = flattenObject;
