'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var debounce$1 = require('../../function/debounce.js');
function debounce(func) {
  var debounceMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (_typeof(options) !== 'object') {
    options = {};
  }
  var _options = options,
    signal = _options.signal,
    _options$leading = _options.leading,
    leading = _options$leading === void 0 ? false : _options$leading,
    _options$trailing = _options.trailing,
    trailing = _options$trailing === void 0 ? true : _options$trailing,
    maxWait = _options.maxWait;
  var edges = Array(2);
  if (leading) {
    edges[0] = 'leading';
  }
  if (trailing) {
    edges[1] = 'trailing';
  }
  var result = undefined;
  var pendingAt = null;
  var _debounced = debounce$1.debounce(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    result = func.apply(this, args);
    pendingAt = null;
  }, debounceMs, {
    signal: signal,
    edges: edges
  });
  var debounced = function debounced() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (maxWait != null) {
      if (pendingAt === null) {
        pendingAt = Date.now();
      } else {
        if (Date.now() - pendingAt >= maxWait) {
          result = func.apply(this, args);
          pendingAt = Date.now();
          _debounced.cancel();
          _debounced.schedule();
          return result;
        }
      }
    }
    _debounced.apply(this, args);
    return result;
  };
  var flush = function flush() {
    _debounced.flush();
    return result;
  };
  debounced.cancel = _debounced.cancel;
  debounced.flush = flush;
  return debounced;
}
exports.debounce = debounce;
