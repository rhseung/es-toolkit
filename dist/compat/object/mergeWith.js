'use strict';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var cloneDeep = require('./cloneDeep.js');
var clone = require('../../object/clone.js');
var getSymbols = require('../_internal/getSymbols.js');
var isArguments = require('../predicate/isArguments.js');
var isObjectLike = require('../predicate/isObjectLike.js');
var isPlainObject = require('../predicate/isPlainObject.js');
var isTypedArray = require('../predicate/isTypedArray.js');
function mergeWith(object) {
  for (var _len = arguments.length, otherArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    otherArgs[_key - 1] = arguments[_key];
  }
  var sources = otherArgs.slice(0, -1);
  var merge = otherArgs[otherArgs.length - 1];
  var result = object;
  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    result = mergeWithDeep(object, source, merge, new Map());
  }
  return result;
}
function mergeWithDeep(target, source, merge, stack) {
  if (source == null || _typeof(source) !== 'object') {
    return target;
  }
  if (stack.has(source)) {
    return clone.clone(stack.get(source));
  }
  stack.set(source, target);
  if (Array.isArray(source)) {
    source = source.slice();
    for (var i = 0; i < source.length; i++) {
      var _source$i;
      source[i] = (_source$i = source[i]) !== null && _source$i !== void 0 ? _source$i : undefined;
    }
  }
  var sourceKeys = [].concat(_toConsumableArray(Object.keys(source)), _toConsumableArray(getSymbols.getSymbols(source)));
  for (var _i = 0; _i < sourceKeys.length; _i++) {
    var key = sourceKeys[_i];
    var sourceValue = source[key];
    var targetValue = target[key];
    if (isArguments.isArguments(sourceValue)) {
      sourceValue = _objectSpread({}, sourceValue);
    }
    if (isArguments.isArguments(targetValue)) {
      targetValue = _objectSpread({}, targetValue);
    }
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(sourceValue)) {
      sourceValue = cloneDeep.cloneDeep(sourceValue);
    }
    if (Array.isArray(sourceValue)) {
      if (_typeof(targetValue) === 'object') {
        var cloned = [];
        var targetKeys = Reflect.ownKeys(targetValue);
        for (var _i2 = 0; _i2 < targetKeys.length; _i2++) {
          var targetKey = targetKeys[_i2];
          cloned[targetKey] = targetValue[targetKey];
        }
        targetValue = cloned;
      } else {
        targetValue = [];
      }
    }
    var merged = merge(targetValue, sourceValue, key, target, source, stack);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
    } else if (isObjectLike.isObjectLike(targetValue) && isObjectLike.isObjectLike(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
    } else if (targetValue == null && isPlainObject.isPlainObject(sourceValue)) {
      target[key] = mergeWithDeep({}, sourceValue, merge, stack);
    } else if (targetValue == null && isTypedArray.isTypedArray(sourceValue)) {
      target[key] = cloneDeep.cloneDeep(sourceValue);
    } else if (targetValue === undefined || sourceValue !== undefined) {
      target[key] = sourceValue;
    }
  }
  return target;
}
exports.mergeWith = mergeWith;
