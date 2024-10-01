'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var unset = require('./unset.js');
var cloneDeep = require('../../object/cloneDeep.js');
function omit(obj) {
  if (obj == null) {
    return {};
  }
  var result = cloneDeep.cloneDeep(obj);
  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    var keys = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
    switch (_typeof(keys)) {
      case 'object':
        {
          if (!Array.isArray(keys)) {
            keys = Array.from(keys);
          }
          for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            unset.unset(result, key);
          }
          break;
        }
      case 'string':
      case 'symbol':
      case 'number':
        {
          unset.unset(result, keys);
          break;
        }
    }
  }
  return result;
}
exports.omit = omit;
