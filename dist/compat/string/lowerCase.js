'use strict';

var lowerCase$1 = require('../../string/lowerCase.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function lowerCase(str) {
  return lowerCase$1.lowerCase(normalizeForCase.normalizeForCase(str));
}
exports.lowerCase = lowerCase;
