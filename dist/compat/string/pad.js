'use strict';

var pad$1 = require('../../string/pad.js');
var toString = require('../util/toString.js');
function pad(str, length) {
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return pad$1.pad(toString.toString(str), length, chars);
}
exports.pad = pad;
