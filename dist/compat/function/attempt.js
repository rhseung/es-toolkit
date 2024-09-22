'use strict';

function attempt(func) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return func.apply(void 0, args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
}
exports.attempt = attempt;
