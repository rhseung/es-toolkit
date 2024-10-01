'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var isPrimitive = require('../predicate/isPrimitive.js');
var isTypedArray = require('../predicate/isTypedArray.js');
function cloneDeep(obj) {
  return cloneDeepImpl(obj);
}
function cloneDeepImpl(obj) {
  var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  if (isPrimitive.isPrimitive(obj)) {
    return obj;
  }
  if (stack.has(obj)) {
    return stack.get(obj);
  }
  if (Array.isArray(obj)) {
    var result = new Array(obj.length);
    stack.set(obj, result);
    for (var i = 0; i < obj.length; i++) {
      result[i] = cloneDeepImpl(obj[i], stack);
    }
    if (Object.hasOwn(obj, 'index')) {
      result.index = obj.index;
    }
    if (Object.hasOwn(obj, 'input')) {
      result.input = obj.input;
    }
    return result;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (obj instanceof RegExp) {
    var _result = new RegExp(obj.source, obj.flags);
    _result.lastIndex = obj.lastIndex;
    return _result;
  }
  if (obj instanceof Map) {
    var _result2 = new Map();
    stack.set(obj, _result2);
    var _iterator = _createForOfIteratorHelper(obj.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];
        _result2.set(key, cloneDeepImpl(value, stack));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _result2;
  }
  if (obj instanceof Set) {
    var _result3 = new Set();
    stack.set(obj, _result3);
    var _iterator2 = _createForOfIteratorHelper(obj.values()),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;
        _result3.add(cloneDeepImpl(_value, stack));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return _result3;
  }
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(obj)) {
    return obj.subarray();
  }
  if (isTypedArray.isTypedArray(obj)) {
    var _result4 = new (Object.getPrototypeOf(obj).constructor)(obj.length);
    stack.set(obj, _result4);
    for (var _i = 0; _i < obj.length; _i++) {
      _result4[_i] = cloneDeepImpl(obj[_i], stack);
    }
    return _result4;
  }
  if (obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== 'undefined' && obj instanceof SharedArrayBuffer) {
    return obj.slice(0);
  }
  if (obj instanceof DataView) {
    var _result5 = new DataView(obj.buffer.slice(0), obj.byteOffset, obj.byteLength);
    stack.set(obj, _result5);
    copyProperties(_result5, obj, stack);
    return _result5;
  }
  if (typeof File !== 'undefined' && obj instanceof File) {
    var _result6 = new File([obj], obj.name, {
      type: obj.type
    });
    stack.set(obj, _result6);
    copyProperties(_result6, obj, stack);
    return _result6;
  }
  if (obj instanceof Blob) {
    var _result7 = new Blob([obj], {
      type: obj.type
    });
    stack.set(obj, _result7);
    copyProperties(_result7, obj, stack);
    return _result7;
  }
  if (obj instanceof Error) {
    var _result8 = new obj.constructor();
    stack.set(obj, _result8);
    _result8.message = obj.message;
    _result8.name = obj.name;
    _result8.stack = obj.stack;
    _result8.cause = obj.cause;
    copyProperties(_result8, obj, stack);
    return _result8;
  }
  if (_typeof(obj) === 'object' && obj !== null) {
    var _result9 = {};
    stack.set(obj, _result9);
    copyProperties(_result9, obj, stack);
    return _result9;
  }
  return obj;
}
function copyProperties(target, source, stack) {
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (descriptor !== null && descriptor !== void 0 && descriptor.writable || descriptor !== null && descriptor !== void 0 && descriptor.set) {
      target[key] = cloneDeepImpl(source[key], stack);
    }
  }
}
exports.cloneDeep = cloneDeep;
exports.copyProperties = copyProperties;
