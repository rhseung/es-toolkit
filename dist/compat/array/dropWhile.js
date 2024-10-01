'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var dropWhile$1 = require('../../array/dropWhile.js');
var property = require('../object/property.js');
var matches = require('../predicate/matches.js');
var matchesProperty = require('../predicate/matchesProperty.js');
function dropWhile(arr, predicate) {
  switch (_typeof(predicate)) {
    case 'function':
      {
        return dropWhile$1.dropWhile(arr, function (item, index, arr) {
          return Boolean(predicate(item, index, arr));
        });
      }
    case 'object':
      {
        if (Array.isArray(predicate) && predicate.length === 2) {
          var key = predicate[0];
          var value = predicate[1];
          return dropWhile$1.dropWhile(arr, matchesProperty.matchesProperty(key, value));
        } else {
          return dropWhile$1.dropWhile(arr, matches.matches(predicate));
        }
      }
    case 'string':
      {
        return dropWhile$1.dropWhile(arr, property.property(predicate));
      }
  }
}
exports.dropWhile = dropWhile;
