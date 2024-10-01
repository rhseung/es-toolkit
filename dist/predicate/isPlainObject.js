'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isPlainObject(value) {
  if (_typeof(value) !== 'object') {
    return false;
  }
  if (value == null) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  if (value.toString() !== '[object Object]') {
    return false;
  }
  var proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
exports.isPlainObject = isPlainObject;
