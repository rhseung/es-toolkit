'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var trimStart$1 = require('../../string/trimStart.js');
function trimStart(str, chars, guard) {
  if (str == null) {
    return '';
  }
  if (guard != null || chars == null) {
    return str.toString().trimStart();
  }
  switch (_typeof(chars)) {
    case 'string':
      {
        return trimStart$1.trimStart(str, chars.toString().split(''));
      }
    case 'object':
      {
        if (Array.isArray(chars)) {
          return trimStart$1.trimStart(str, chars.map(function (x) {
            return x.toString();
          }));
        } else {
          return trimStart$1.trimStart(str, chars.toString().split(''));
        }
      }
  }
}
exports.trimStart = trimStart;
