'use strict';

var startCase$1 = require('../../string/startCase.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function startCase(str) {
  return startCase$1.startCase(normalizeForCase.normalizeForCase(str));
}
exports.startCase = startCase;
