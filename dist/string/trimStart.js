'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function trimStart(str, chars) {
  if (chars === undefined) {
    return str.trimStart();
  }
  var startIndex = 0;
  switch (_typeof(chars)) {
    case 'string':
      {
        while (startIndex < str.length && str[startIndex] === chars) {
          startIndex++;
        }
        break;
      }
    case 'object':
      {
        while (startIndex < str.length && chars.includes(str[startIndex])) {
          startIndex++;
        }
      }
  }
  return str.substring(startIndex);
}
exports.trimStart = trimStart;
