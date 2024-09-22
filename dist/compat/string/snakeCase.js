'use strict';

var snakeCase$1 = require('../../string/snakeCase.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function snakeCase(str) {
  return snakeCase$1.snakeCase(normalizeForCase.normalizeForCase(str));
}
exports.snakeCase = snakeCase;
