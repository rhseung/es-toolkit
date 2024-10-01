'use strict';

var isJSONValue = require('./isJSONValue.js');
var isPlainObject = require('./isPlainObject.js');
function isJSONObject(obj) {
  if (!isPlainObject.isPlainObject(obj)) {
    return false;
  }
  var keys = Reflect.ownKeys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (typeof key !== 'string') {
      return false;
    }
    if (!isJSONValue.isJSONValue(value)) {
      return false;
    }
  }
  return true;
}
exports.isJSONObject = isJSONObject;
