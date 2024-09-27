'use strict';

var toFinite = require('./toFinite.js');
function toInteger(value) {
  var finite = toFinite.toFinite(value);
  var remainder = finite % 1;
  return remainder ? finite - remainder : finite;
}
exports.toInteger = toInteger;
