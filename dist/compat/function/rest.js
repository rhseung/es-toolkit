'use strict';

var rest$1 = require('../../function/rest.js');
function rest(func) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length - 1;
  start = Number.parseInt(start, 10);
  if (Number.isNaN(start) || start < 0) {
    start = func.length - 1;
  }
  return rest$1.rest(func, start);
}
exports.rest = rest;
