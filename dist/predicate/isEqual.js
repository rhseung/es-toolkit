'use strict';

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var tags = require('../compat/_internal/tags.js');
var getSymbols = require('../compat/_internal/getSymbols.js');
var getTag = require('../compat/_internal/getTag.js');
var isPlainObject = require('./isPlainObject.js');
function isEqual(a, b) {
  if (_typeof(a) === _typeof(b)) {
    switch (_typeof(a)) {
      case 'bigint':
      case 'string':
      case 'boolean':
      case 'symbol':
      case 'undefined':
        {
          return a === b;
        }
      case 'number':
        {
          return a === b || Object.is(a, b);
        }
      case 'function':
        {
          return a === b;
        }
      case 'object':
        {
          return areObjectsEqual(a, b);
        }
    }
  }
  return areObjectsEqual(a, b);
}
function areObjectsEqual(a, b, stack) {
  var _stack;
  if (Object.is(a, b)) {
    return true;
  }
  var aTag = getTag.getTag(a);
  var bTag = getTag.getTag(b);
  if (aTag === tags.argumentsTag) {
    aTag = tags.objectTag;
  }
  if (bTag === tags.argumentsTag) {
    bTag = tags.objectTag;
  }
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case tags.stringTag:
      return a.toString() === b.toString();
    case tags.numberTag:
      {
        var x = a.valueOf();
        var y = b.valueOf();
        return x === y || Number.isNaN(x) && Number.isNaN(y);
      }
    case tags.booleanTag:
    case tags.dateTag:
    case tags.symbolTag:
      return Object.is(a.valueOf(), b.valueOf());
    case tags.regexpTag:
      {
        return a.source === b.source && a.flags === b.flags;
      }
    case tags.functionTag:
      {
        return a === b;
      }
  }
  stack = (_stack = stack) !== null && _stack !== void 0 ? _stack : new Map();
  var aStack = stack.get(a);
  var bStack = stack.get(b);
  if (aStack != null && bStack != null) {
    return aStack === b;
  }
  stack.set(a, b);
  stack.set(b, a);
  try {
    switch (aTag) {
      case tags.mapTag:
        {
          if (a.size !== b.size) {
            return false;
          }
          var _iterator = _createForOfIteratorHelper(a.entries()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];
              if (!b.has(key) || !areObjectsEqual(value, b.get(key), stack)) {
                return false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return true;
        }
      case tags.setTag:
        {
          if (a.size !== b.size) {
            return false;
          }
          var aValues = Array.from(a.values());
          var bValues = Array.from(b.values());
          var _loop = function _loop() {
              var aValue = aValues[i];
              var index = bValues.findIndex(function (bValue) {
                return areObjectsEqual(aValue, bValue, stack);
              });
              if (index === -1) {
                return {
                  v: false
                };
              }
              bValues.splice(index, 1);
            },
            _ret;
          for (var i = 0; i < aValues.length; i++) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
          return true;
        }
      case tags.arrayTag:
      case tags.uint8ArrayTag:
      case tags.uint8ClampedArrayTag:
      case tags.uint16ArrayTag:
      case tags.uint32ArrayTag:
      case tags.bigUint64ArrayTag:
      case tags.int8ArrayTag:
      case tags.int16ArrayTag:
      case tags.int32ArrayTag:
      case tags.bigInt64ArrayTag:
      case tags.float32ArrayTag:
      case tags.float64ArrayTag:
        {
          if (typeof Buffer !== 'undefined' && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) {
            return false;
          }
          if (a.length !== b.length) {
            return false;
          }
          for (var _i = 0; _i < a.length; _i++) {
            if (!areObjectsEqual(a[_i], b[_i], stack)) {
              return false;
            }
          }
          return true;
        }
      case tags.arrayBufferTag:
        {
          if (a.byteLength !== b.byteLength) {
            return false;
          }
          return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack);
        }
      case tags.dataViewTag:
        {
          if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) {
            return false;
          }
          return areObjectsEqual(a.buffer, b.buffer, stack);
        }
      case tags.errorTag:
        {
          return a.name === b.name && a.message === b.message;
        }
      case tags.objectTag:
        {
          var areEqualInstances = areObjectsEqual(a.constructor, b.constructor, stack) || isPlainObject.isPlainObject(a) && isPlainObject.isPlainObject(b);
          if (!areEqualInstances) {
            return false;
          }
          var aKeys = [].concat(_toConsumableArray(Object.keys(a)), _toConsumableArray(getSymbols.getSymbols(a)));
          var bKeys = [].concat(_toConsumableArray(Object.keys(b)), _toConsumableArray(getSymbols.getSymbols(b)));
          if (aKeys.length !== bKeys.length) {
            return false;
          }
          for (var _i2 = 0; _i2 < aKeys.length; _i2++) {
            var propKey = aKeys[_i2];
            var aProp = a[propKey];
            if (!Object.prototype.hasOwnProperty.call(b, propKey)) {
              return false;
            }
            var bProp = b[propKey];
            if (!areObjectsEqual(aProp, bProp, stack)) {
              return false;
            }
          }
          return true;
        }
      default:
        {
          return false;
        }
    }
  } finally {
    stack["delete"](a);
    stack["delete"](b);
  }
}
exports.isEqual = isEqual;
