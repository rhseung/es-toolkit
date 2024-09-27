'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isTypedArray = require('../predicate/isTypedArray.js');
var isPrimitive = require('../predicate/isPrimitive.js');
function clone(obj) {
  if (isPrimitive.isPrimitive(obj)) {
    return obj;
  }
  if (Array.isArray(obj) || isTypedArray.isTypedArray(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== 'undefined' && obj instanceof SharedArrayBuffer) {
    return obj.slice(0);
  }
  var prototype = Object.getPrototypeOf(obj);
  var Constructor = prototype.constructor;
  if (obj instanceof Date || obj instanceof Map || obj instanceof Set) {
    return new Constructor(obj);
  }
  if (obj instanceof RegExp) {
    var newRegExp = new Constructor(obj);
    newRegExp.lastIndex = obj.lastIndex;
    return newRegExp;
  }
  if (obj instanceof DataView) {
    return new Constructor(obj.buffer.slice(0));
  }
  if (obj instanceof Error) {
    var newError = new Constructor(obj.message);
    newError.stack = obj.stack;
    newError.name = obj.name;
    newError.cause = obj.cause;
    return newError;
  }
  if (typeof File !== 'undefined' && obj instanceof File) {
    var newFile = new Constructor([obj], obj.name, {
      type: obj.type,
      lastModified: obj.lastModified
    });
    return newFile;
  }
  if (_typeof(obj) === 'object') {
    var newObject = Object.create(prototype);
    return Object.assign(newObject, obj);
  }
  return obj;
}
exports.clone = clone;
