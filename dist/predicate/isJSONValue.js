'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isJSONArray = require('./isJSONArray.js');
var isJSONObject = require('./isJSONObject.js');
function isJSONValue(value) {
  switch (_typeof(value)) {
    case 'object':
      {
        return value === null || isJSONArray.isJSONArray(value) || isJSONObject.isJSONObject(value);
      }
    case 'string':
    case 'number':
    case 'boolean':
      {
        return true;
      }
    default:
      {
        return false;
      }
  }
}
exports.isJSONValue = isJSONValue;
