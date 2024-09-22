'use strict';

function debounce(func, debounceMs) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    signal = _ref.signal,
    edges = _ref.edges;
  var pendingThis = undefined;
  var pendingArgs = null;
  var leading = edges != null && edges.includes('leading');
  var trailing = edges == null || edges.includes('trailing');
  var invoke = function invoke() {
    if (pendingArgs !== null) {
      func.apply(pendingThis, pendingArgs);
      pendingThis = undefined;
      pendingArgs = null;
    }
  };
  var onTimerEnd = function onTimerEnd() {
    if (trailing) {
      invoke();
    }
    cancel();
  };
  var timeoutId = null;
  var schedule = function schedule() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      timeoutId = null;
      onTimerEnd();
    }, debounceMs);
  };
  var cancelTimer = function cancelTimer() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  var cancel = function cancel() {
    cancelTimer();
    pendingThis = undefined;
    pendingArgs = null;
  };
  var flush = function flush() {
    cancelTimer();
    invoke();
  };
  var debounced = function debounced() {
    if (signal !== null && signal !== void 0 && signal.aborted) {
      return;
    }
    pendingThis = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    pendingArgs = args;
    var isFirstCall = timeoutId == null;
    schedule();
    if (leading && isFirstCall) {
      invoke();
    }
  };
  debounced.schedule = schedule;
  debounced.cancel = cancel;
  debounced.flush = flush;
  signal === null || signal === void 0 || signal.addEventListener('abort', cancel, {
    once: true
  });
  return debounced;
}
exports.debounce = debounce;
