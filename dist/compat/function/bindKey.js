'use strict';

function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function bindKey(object, key) {
  for (var _len = arguments.length, partialArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    partialArgs[_key - 2] = arguments[_key];
  }
  var _bound = function bound() {
    var args = [];
    var startIndex = 0;
    for (var i = 0; i < partialArgs.length; i++) {
      var arg = partialArgs[i];
      if (arg === bindKey.placeholder) {
        var _startIndex;
        args.push((_startIndex = startIndex++, _startIndex < 0 || arguments.length <= _startIndex ? undefined : arguments[_startIndex]));
      } else {
        args.push(arg);
      }
    }
    for (var _i = startIndex; _i < arguments.length; _i++) {
      args.push(_i < 0 || arguments.length <= _i ? undefined : arguments[_i]);
    }
    if (this instanceof _bound) {
      return _construct(object[key], args);
    }
    return object[key].apply(object, args);
  };
  return _bound;
}
var bindKeyPlaceholder = Symbol('bindKey.placeholder');
bindKey.placeholder = bindKeyPlaceholder;
exports.bindKey = bindKey;
