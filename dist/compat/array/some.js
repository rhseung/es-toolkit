'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var identity = require('../_internal/identity.js');
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function some(arr, predicate, guard) {
  if (guard != null) {
    predicate = undefined;
  }
  if (!predicate) {
    predicate = identity.identity;
  }
  if (!Array.isArray(arr)) {
    return false;
  }
  switch (_typeof(predicate)) {
    case 'function':
      {
        return arr.some(predicate);
      }
    case 'object':
      {
        if (Array.isArray(predicate) && predicate.length === 2) {
          var key = predicate[0];
          var value = predicate[1];
          return arr.some(matchesProperty.matchesProperty(key, value));
        } else {
          return arr.some(matches.matches(predicate));
        }
      }
    case 'string':
      {
        return arr.some(property.property(predicate));
      }
  }
}
exports.some = some;
