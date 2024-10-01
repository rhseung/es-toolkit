'use strict';

var isJSONValue = require('./isJSONValue.js');
function isJSONArray(value) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every(function (item) {
    return isJSONValue.isJSONValue(item);
  });
}
exports.isJSONArray = isJSONArray;
