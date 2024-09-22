'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function findLastIndex(arr, doesMatch) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  } else {
    fromIndex = Math.min(fromIndex, arr.length - 1);
  }
  arr = arr.slice(0, fromIndex + 1);
  switch (_typeof(doesMatch)) {
    case 'function':
      {
        return arr.findLastIndex(doesMatch);
      }
    case 'object':
      {
        if (Array.isArray(doesMatch) && doesMatch.length === 2) {
          var key = doesMatch[0];
          var value = doesMatch[1];
          return arr.findLastIndex(matchesProperty.matchesProperty(key, value));
        } else {
          return arr.findLastIndex(matches.matches(doesMatch));
        }
      }
    case 'string':
      {
        return arr.findLastIndex(property.property(doesMatch));
      }
  }
}
exports.findLastIndex = findLastIndex;
