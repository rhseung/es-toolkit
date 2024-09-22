'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var trimEnd$1 = require('../../string/trimEnd.js');
function trimEnd(str, chars, guard) {
  if (str == null) {
    return '';
  }
  if (guard != null || chars == null) {
    return str.toString().trimEnd();
  }
  switch (_typeof(chars)) {
    case 'string':
      {
        return trimEnd$1.trimEnd(str, chars.toString().split(''));
      }
    case 'object':
      {
        if (Array.isArray(chars)) {
          return trimEnd$1.trimEnd(str, chars.map(function (x) {
            return x.toString();
          }));
        } else {
          return trimEnd$1.trimEnd(str, chars.toString().split(''));
        }
      }
  }
}
exports.trimEnd = trimEnd;
