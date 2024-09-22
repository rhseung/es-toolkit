'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isDeepKey = require('../_internal/isDeepKey.js');
var toKey = require('../_internal/toKey.js');
var toPath = require('../util/toPath.js');
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (_typeof(path)) {
    case 'string':
      {
        var result = object[path];
        if (result === undefined) {
          if (isDeepKey.isDeepKey(path)) {
            return get(object, toPath.toPath(path), defaultValue);
          } else {
            return defaultValue;
          }
        }
        return result;
      }
    case 'number':
    case 'symbol':
      {
        if (typeof path === 'number') {
          path = toKey.toKey(path);
        }
        var _result = object[path];
        if (_result === undefined) {
          return defaultValue;
        }
        return _result;
      }
    default:
      {
        var _path;
        if (Array.isArray(path)) {
          return getWithPath(object, path, defaultValue);
        }
        if (Object.is((_path = path) === null || _path === void 0 ? void 0 : _path.valueOf(), -0)) {
          path = '-0';
        } else {
          path = String(path);
        }
        var _result2 = object[path];
        if (_result2 === undefined) {
          return defaultValue;
        }
        return _result2;
      }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  var current = object;
  for (var index = 0; index < path.length; index++) {
    if (current == null) {
      return defaultValue;
    }
    current = current[path[index]];
  }
  if (current === undefined) {
    return defaultValue;
  }
  return current;
}
exports.get = get;
