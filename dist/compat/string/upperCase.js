'use strict';

var upperCase$1 = require('../../string/upperCase.js');
require('../../string/deburr.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function upperCase(str) {
  return upperCase$1.upperCase(normalizeForCase.normalizeForCase(str));
}
exports.upperCase = upperCase;
