'use strict';

var getTag = require('../_internal/getTag.js');
function isError(value) {
  return getTag.getTag(value) === '[object Error]';
}
exports.isError = isError;
