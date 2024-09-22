'use strict';

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var DOTS_KEY = /^[\w.]+$/g;
var ESCAPE_REGEXP = /\\(\\)?/g;
var PROPERTY_REGEXP = RegExp('[^.[\\]]+' + '|' + '\\[(?:' + '([^"\'][^[]*)' + '|' + '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' + ')\\]' + '|' + '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
function toPath(deepKey) {
  if (DOTS_KEY.test(deepKey)) {
    return deepKey.split('.');
  }
  var result = [];
  if (deepKey[0] === '.') {
    result.push('');
  }
  var matches = deepKey.matchAll(PROPERTY_REGEXP);
  var _iterator = _createForOfIteratorHelper(matches),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var match = _step.value;
      var key = match[0];
      var expr = match[1];
      var quote = match[2];
      var substr = match[3];
      if (quote) {
        key = substr.replace(ESCAPE_REGEXP, '$1');
      } else if (expr) {
        key = expr;
      }
      result.push(key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
exports.toPath = toPath;
