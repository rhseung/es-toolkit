'use strict';

function invert(obj) {
  var result = {};
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];
    result[value] = key;
  }
  return result;
}
exports.invert = invert;
