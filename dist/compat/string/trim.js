'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var trim$1 = require('../../string/trim.js');
function trim(str, chars, guard) {
  if (str == null) {
    return '';
  }
  if (guard != null || chars == null) {
    return str.toString().trim();
  }
  switch (_typeof(chars)) {
    case 'string':
      {
        return trim$1.trim(str, chars.toString().split(''));
      }
    case 'object':
      {
        if (Array.isArray(chars)) {
          return trim$1.trim(str, chars.map(function (x) {
            return x.toString();
          }));
        } else {
          return trim$1.trim(str, chars.toString().split(''));
        }
      }
  }
}
exports.trim = trim;
