'use strict';

var toString = require('../util/toString.js');
function normalizeForCase(str) {
  if (typeof str !== 'string') {
    str = toString.toString(str);
  }
  return str.replace(/['\u2019]/g, '');
}
exports.normalizeForCase = normalizeForCase;
