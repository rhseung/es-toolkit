'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var toKey = require('../_internal/toKey.js');
var cloneDeep = require('../object/cloneDeep.js');
var get = require('../object/get.js');
var has = require('../object/has.js');
var isMatch = require('./isMatch.js');
function matchesProperty(property, source) {
  switch (_typeof(property)) {
    case 'object':
      {
        var _property;
        if (Object.is((_property = property) === null || _property === void 0 ? void 0 : _property.valueOf(), -0)) {
          property = '-0';
        }
        break;
      }
    case 'number':
      {
        property = toKey.toKey(property);
        break;
      }
  }
  source = cloneDeep.cloneDeep(source);
  return function (target) {
    var result = get.get(target, property);
    if (result === undefined) {
      return has.has(target, property);
    }
    if (source === undefined) {
      return result === undefined;
    }
    return isMatch.isMatch(result, source);
  };
}
exports.matchesProperty = matchesProperty;
