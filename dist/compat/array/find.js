'use strict';

function _objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);
  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);
  return entries;
}
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function find(source, doesMatch) {
  var values = source;
  if (!Array.isArray(source)) {
    values = Object.keys(source).map(function (key) {
      return source[key];
    });
  }
  switch (_typeof(doesMatch)) {
    case 'function':
      {
        if (!Array.isArray(source)) {
          var entries = _objectEntries(source);
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            var key = entry[0];
            var value = entry[1];
            if (doesMatch(value, key, source)) {
              return value;
            }
          }
          return undefined;
        }
        return values.find(doesMatch);
      }
    case 'object':
      {
        if (Array.isArray(doesMatch) && doesMatch.length === 2) {
          var _key = doesMatch[0];
          var _value = doesMatch[1];
          return values.find(matchesProperty.matchesProperty(_key, _value));
        } else {
          return values.find(matches.matches(doesMatch));
        }
      }
    case 'string':
      {
        return values.find(property.property(doesMatch));
      }
  }
}
exports.find = find;
