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
  if (Object.prototype.toString.call(object) !== '[object Object]') {
    var _Object$getOwnPropert;
    var tag = object[Symbol.toStringTag];
    if (tag == null) {
      return false;
    }
    var isTagReadonly = !((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)) !== null && _Object$getOwnPropert !== void 0 && _Object$getOwnPropert.writable);
    if (isTagReadonly) {
      return false;
    }
    return object.toString() === "[object ".concat(tag, "]");
  }
  var proto = object;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(object) === proto;
}
exports.isPlainObject = isPlainObject;
