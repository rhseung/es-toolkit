'use strict';

var toString = require('../util/toString.js');
function padStart(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return toString.toString(str).padStart(length, chars);
}
exports.padStart = padStart;
