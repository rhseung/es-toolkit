'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var debounce = require('./debounce.js');
function throttle(func) {
  var throttleMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (_typeof(options) !== 'object') {
    options = {};
  }
  var _options = options,
    _options$leading = _options.leading,
    leading = _options$leading === void 0 ? true : _options$leading,
    _options$trailing = _options.trailing,
    trailing = _options$trailing === void 0 ? true : _options$trailing,
    signal = _options.signal;
  return debounce.debounce(func, throttleMs, {
    leading: leading,
    trailing: trailing,
    signal: signal,
    maxWait: throttleMs
  });
}
exports.throttle = throttle;
