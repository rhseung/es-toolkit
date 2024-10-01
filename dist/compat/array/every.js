'use strict';

function _objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);
  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);
  return entries;
}
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var identity = require('../_internal/identity.js');
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function every(source, doesMatch) {
  if (!source) {
    source = [];
  }
  var values = source;
  if (!Array.isArray(source)) {
    values = Object.keys(source).map(function (key) {
      return source[key];
    });
  }
  if (!doesMatch) {
    doesMatch = identity.identity;
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
            if (!doesMatch(value, key, source)) {
              return false;
            }
          }
          return true;
        }
        return values.every(doesMatch);
      }
    case 'object':
      {
        if (Array.isArray(doesMatch) && doesMatch.length === 2) {
          var _key = doesMatch[0];
          var _value = doesMatch[1];
          return values.every(matchesProperty.matchesProperty(_key, _value));
        } else {
          return values.every(matches.matches(doesMatch));
        }
      }
    case 'string':
      {
        return values.every(property.property(doesMatch));
      }
  }
}
exports.every = every;
