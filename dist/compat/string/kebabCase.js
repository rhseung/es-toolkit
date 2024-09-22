'use strict';

var kebabCase$1 = require('../../string/kebabCase.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function kebabCase(str) {
  return kebabCase$1.kebabCase(normalizeForCase.normalizeForCase(str));
}
exports.kebabCase = kebabCase;
