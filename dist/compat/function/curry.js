'use strict';

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function curry(func) {
  var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length;
  var guard = arguments.length > 2 ? arguments[2] : undefined;
  arity = guard ? func.length : arity;
  arity = Number.parseInt(arity, 10);
  if (Number.isNaN(arity) || arity < 1) {
    arity = 0;
  }
  var _wrapper = function wrapper() {
    for (var _len = arguments.length, partialArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      partialArgs[_key] = arguments[_key];
    }
    var holders = partialArgs.filter(function (item) {
      return item === curry.placeholder;
    });
    var length = partialArgs.length - holders.length;
    if (length < arity) {
      return makeCurry(func, arity - length, partialArgs);
    }
    if (this instanceof _wrapper) {
      return _construct(func, partialArgs);
    }
    return func.apply(this, partialArgs);
  };
  _wrapper.placeholder = curryPlaceholder;
  return _wrapper;
}
function makeCurry(func, arity, partialArgs) {
  function wrapper() {
    for (var _len2 = arguments.length, providedArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      providedArgs[_key2] = arguments[_key2];
    }
    var holders = providedArgs.filter(function (item) {
      return item === curry.placeholder;
    });
    var length = providedArgs.length - holders.length;
    providedArgs = composeArgs(providedArgs, partialArgs);
    if (length < arity) {
      return makeCurry(func, arity - length, providedArgs);
    }
    if (this instanceof wrapper) {
      return _construct(func, _toConsumableArray(providedArgs));
    }
    return func.apply(this, providedArgs);
  }
  wrapper.placeholder = curryPlaceholder;
  return wrapper;
}
function composeArgs(providedArgs, partialArgs) {
  var args = [];
  var startIndex = 0;
  for (var i = 0; i < partialArgs.length; i++) {
    var arg = partialArgs[i];
    if (arg === curry.placeholder && startIndex < providedArgs.length) {
      args.push(providedArgs[startIndex++]);
    } else {
      args.push(arg);
    }
  }
  for (var _i = startIndex; _i < providedArgs.length; _i++) {
    args.push(providedArgs[_i]);
  }
  return args;
}
var curryPlaceholder = Symbol('curry.placeholder');
curry.placeholder = curryPlaceholder;
exports.curry = curry;
