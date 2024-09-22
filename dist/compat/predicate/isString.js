'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var getTag = require('../_internal/getTag.js');
function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (_typeof(value) === 'object' && value != null && getTag.getTag(value) === '[object String]') {
    return true;
  }
  return false;
}
exports.isString = isString;
