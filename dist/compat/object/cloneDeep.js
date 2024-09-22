'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var cloneDeep$1 = require('../../object/cloneDeep.js');
var tags = require('../_internal/tags.js');
function cloneDeep(obj) {
  if (_typeof(obj) !== 'object') {
    return cloneDeep$1.cloneDeep(obj);
  }
  switch (Object.prototype.toString.call(obj)) {
    case tags.numberTag:
    case tags.stringTag:
    case tags.booleanTag:
      {
        var result = new obj.constructor(obj === null || obj === void 0 ? void 0 : obj.valueOf());
        cloneDeep$1.copyProperties(result, obj);
        return result;
      }
    case tags.argumentsTag:
      {
        var _result = {};
        cloneDeep$1.copyProperties(_result, obj);
        _result.length = obj.length;
        _result[Symbol.iterator] = obj[Symbol.iterator];
        return _result;
      }
    default:
      {
        return cloneDeep$1.cloneDeep(obj);
      }
  }
}
exports.cloneDeep = cloneDeep;
