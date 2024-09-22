'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var mapKeys$1 = require('../../object/mapKeys.js');
var identity = require('../_internal/identity.js');
var property = require('./property.js');
function mapKeys(object, getNewKey) {
  var _getNewKey;
  getNewKey = (_getNewKey = getNewKey) !== null && _getNewKey !== void 0 ? _getNewKey : identity.identity;
  switch (_typeof(getNewKey)) {
    case 'string':
    case 'symbol':
    case 'number':
    case 'object':
      {
        return mapKeys$1.mapKeys(object, property.property(getNewKey));
      }
    case 'function':
      {
        return mapKeys$1.mapKeys(object, getNewKey);
      }
  }
}
exports.mapKeys = mapKeys;
