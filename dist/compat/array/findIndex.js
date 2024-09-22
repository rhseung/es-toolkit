'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function findIndex(source, doesMatch) {
  switch (_typeof(doesMatch)) {
    case 'function':
      {
        return source.findIndex(doesMatch);
      }
    case 'object':
      {
        if (Array.isArray(doesMatch) && doesMatch.length === 2) {
          var key = doesMatch[0];
          var value = doesMatch[1];
          return source.findIndex(matchesProperty.matchesProperty(key, value));
        } else {
          return source.findIndex(matches.matches(doesMatch));
        }
      }
    case 'string':
      {
        return source.findIndex(property.property(doesMatch));
      }
  }
}
exports.findIndex = findIndex;
