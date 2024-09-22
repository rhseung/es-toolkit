'use strict';

var ary = require('./ary.js');
function unary(func) {
  return ary.ary(func, 1);
}
exports.unary = unary;
