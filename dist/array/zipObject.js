'use strict';

function zipObject(keys, values) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}
exports.zipObject = zipObject;
