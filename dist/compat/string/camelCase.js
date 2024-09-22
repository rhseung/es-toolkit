'use strict';

var camelCase$1 = require('../../string/camelCase.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function camelCase(str) {
  return camelCase$1.camelCase(normalizeForCase.normalizeForCase(str));
}
exports.camelCase = camelCase;
