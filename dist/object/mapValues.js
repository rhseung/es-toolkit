'use strict';

function mapValues(object, getNewValue) {
  var result = {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = object[key];
    result[key] = getNewValue(value, key, object);
  }
  return result;
}
exports.mapValues = mapValues;
