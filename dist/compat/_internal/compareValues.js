'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function getPriority(a) {
  if (_typeof(a) === 'symbol') {
    return 1;
  }
  if (a === null) {
    return 2;
  }
  if (a === undefined) {
    return 3;
  }
  if (a !== a) {
    return 4;
  }
  return 0;
}
var compareValues = function compareValues(a, b, order) {
  if (a !== b) {
    if (typeof a === 'string' && typeof b === 'string') {
      return order === 'desc' ? b.localeCompare(a) : a.localeCompare(b);
    }
    var aPriority = getPriority(a);
    var bPriority = getPriority(b);
    if (aPriority === bPriority && aPriority === 0) {
      if (a < b) {
        return order === 'desc' ? 1 : -1;
      }
      if (a > b) {
        return order === 'desc' ? -1 : 1;
      }
    }
    return order === 'desc' ? bPriority - aPriority : aPriority - bPriority;
  }
  return 0;
};
exports.compareValues = compareValues;
