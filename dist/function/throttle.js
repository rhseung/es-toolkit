'use strict';

var debounce = require('./debounce.js');
function throttle(func, throttleMs) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    signal = _ref.signal,
    _ref$edges = _ref.edges,
    edges = _ref$edges === void 0 ? ['leading', 'trailing'] : _ref$edges;
  var pendingAt = null;
  var debounced = debounce.debounce(func, throttleMs, {
    signal: signal,
    edges: edges
  });
  var throttled = function throttled() {
    if (pendingAt == null) {
      pendingAt = Date.now();
    } else {
      if (Date.now() - pendingAt >= throttleMs) {
        pendingAt = Date.now();
        debounced.cancel();
        debounced.apply(void 0, arguments);
      }
    }
    debounced.apply(void 0, arguments);
  };
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}
exports.throttle = throttle;
