'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var getTag = require('../_internal/getTag.js');
function isArguments(value) {
  return value !== null && _typeof(value) === 'object' && getTag.getTag(value) === '[object Arguments]';
}
exports.isArguments = isArguments;
