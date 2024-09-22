'use strict';

function mapKeys(object, getNewKey) {
  var result = {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = object[key];
    result[getNewKey(value, key, object)] = value;
  }
  return result;
}
exports.mapKeys = mapKeys;
