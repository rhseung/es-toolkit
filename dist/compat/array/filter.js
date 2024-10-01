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
var isArray = require('../predicate/isArray.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function filter(source, predicate) {
  if (!predicate) {
    predicate = identity.identity;
  }
  var collection = isArray.isArray(source) ? source : Object.keys(source).map(function (key) {
    return source[key];
  });
  switch (_typeof(predicate)) {
    case 'function':
      {
        if (!Array.isArray(source)) {
          var result = [];
          var entries = _objectEntries(source);
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            var key = entry[0];
            var value = entry[1];
            if (predicate(value, key, source)) {
              result.push(value);
            }
          }
          return result;
        }
        return collection.filter(predicate);
      }
    case 'object':
      {
        return isArray.isArray(predicate) ? collection.filter(matchesProperty.matchesProperty(predicate[0], predicate[1])) : collection.filter(matches.matches(predicate));
      }
    case 'string':
      {
        return collection.filter(property.property(predicate));
      }
  }
}
exports.filter = filter;
