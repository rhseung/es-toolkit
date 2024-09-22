'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var random$1 = require('../../math/random.js');
var randomInt = require('../../math/randomInt.js');
var clamp = require('./clamp.js');
function random() {
  var minimum = 0;
  var maximum = 1;
  var floating = false;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  switch (args.length) {
    case 1:
      {
        if (typeof args[0] === 'boolean') {
          floating = args[0];
        } else {
          maximum = args[0];
        }
        break;
      }
    case 2:
      {
        if (typeof args[1] === 'boolean') {
          maximum = args[0];
          floating = args[1];
        } else {
          minimum = args[0];
          maximum = args[1];
        }
      }
    case 3:
      {
        if (_typeof(args[2]) === 'object' && args[2] != null && args[2][args[1]] === args[0]) {
          minimum = 0;
          maximum = args[0];
          floating = false;
        } else {
          minimum = args[0];
          maximum = args[1];
          floating = args[2];
        }
      }
  }
  if (typeof minimum !== 'number') {
    minimum = Number(minimum);
  }
  if (typeof maximum !== 'number') {
    minimum = Number(maximum);
  }
  if (!minimum) {
    minimum = 0;
  }
  if (!maximum) {
    maximum = 0;
  }
  if (minimum > maximum) {
    var _ref = [maximum, minimum];
    minimum = _ref[0];
    maximum = _ref[1];
  }
  minimum = clamp.clamp(minimum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  maximum = clamp.clamp(maximum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  if (minimum === maximum) {
    return minimum;
  }
  if (floating) {
    return random$1.random(minimum, maximum + 1);
  } else {
    return randomInt.randomInt(minimum, maximum + 1);
  }
}
exports.random = random;
