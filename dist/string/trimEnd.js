'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function trimEnd(str, chars) {
  if (chars === undefined) {
    return str.trimEnd();
  }
  var endIndex = str.length;
  switch (_typeof(chars)) {
    case 'string':
      {
        while (endIndex > 0 && str[endIndex - 1] === chars) {
          endIndex--;
        }
        break;
      }
    case 'object':
      {
        while (endIndex > 0 && chars.includes(str[endIndex - 1])) {
          endIndex--;
        }
      }
  }
  return str.substring(0, endIndex);
}
exports.trimEnd = trimEnd;
