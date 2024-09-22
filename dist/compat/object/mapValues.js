'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var mapValues$1 = require('../../object/mapValues.js');
var identity = require('../_internal/identity.js');
var property = require('./property.js');
function mapValues(object, getNewValue) {
  var _getNewValue;
  getNewValue = (_getNewValue = getNewValue) !== null && _getNewValue !== void 0 ? _getNewValue : identity.identity;
  switch (_typeof(getNewValue)) {
    case 'string':
    case 'symbol':
    case 'number':
    case 'object':
      {
        return mapValues$1.mapValues(object, property.property(getNewValue));
      }
    case 'function':
      {
        return mapValues$1.mapValues(object, getNewValue);
      }
  }
}
exports.mapValues = mapValues;
