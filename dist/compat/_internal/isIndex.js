'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value) {
  switch (_typeof(value)) {
    case 'number':
      {
        return Number.isInteger(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER;
      }
    case 'symbol':
      {
        return false;
      }
    case 'string':
      {
        return IS_UNSIGNED_INTEGER.test(value);
      }
  }
}
exports.isIndex = isIndex;
