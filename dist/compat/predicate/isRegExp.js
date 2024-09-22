'use strict';

var getTag = require('../_internal/getTag.js');
function isRegExp(value) {
  return getTag.getTag(value) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
