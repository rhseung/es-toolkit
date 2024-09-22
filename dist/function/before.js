'use strict';

function before(n, func) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('n must be a non-negative integer.');
  }
  var counter = 0;
  return function () {
    if (++counter < n) {
      return func.apply(void 0, arguments);
    }
    return undefined;
  };
}
exports.before = before;
