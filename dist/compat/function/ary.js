'use strict';

var ary$1 = require('../../function/ary.js');
function ary(func) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length;
  var guard = arguments.length > 2 ? arguments[2] : undefined;
  if (guard) {
    n = func.length;
  }
  if (Number.isNaN(n) || n < 0) {
    n = 0;
  }
  return ary$1.ary(func, n);
}
exports.ary = ary;
