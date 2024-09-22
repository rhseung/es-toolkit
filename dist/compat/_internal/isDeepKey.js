'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isDeepKey(key) {
  switch (_typeof(key)) {
    case 'number':
    case 'symbol':
      {
        return false;
      }
    case 'string':
      {
        return key.includes('.') || key.includes('[') || key.includes(']');
      }
  }
}
exports.isDeepKey = isDeepKey;
