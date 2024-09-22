'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isPlainObject(object) {
  if (_typeof(object) !== 'object') {
    return false;
  }
  if (object == null) {
    return false;
  }
  if (Object.getPrototypeOf(object) === null) {
    return true;
  }
  if (object.toString() !== '[object Object]') {
    return false;
  }
  var proto = object;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(object) === proto;
}
exports.isPlainObject = isPlainObject;
