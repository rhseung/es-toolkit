'use strict';

var isSymbol = require('../predicate/isSymbol.js');
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === 'number' || typeof value === 'boolean' || value == null || isSymbol.isSymbol(value)) {
    return true;
  }
  return typeof value === 'string' && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null;
}
exports.isKey = isKey;
