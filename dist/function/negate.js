'use strict';

function negate(func) {
  return function () {
    return !func.apply(void 0, arguments);
  };
}
exports.negate = negate;
