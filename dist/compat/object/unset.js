'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var get = require('./get.js');
var isDeepKey = require('../_internal/isDeepKey.js');
var toKey = require('../_internal/toKey.js');
var toPath = require('../util/toPath.js');
function unset(obj, path) {
  if (obj == null) {
    return true;
  }
  switch (_typeof(path)) {
    case 'symbol':
    case 'number':
    case 'object':
      {
        if (Array.isArray(path)) {
          return unsetWithPath(obj, path);
        }
        if (typeof path === 'number') {
          path = toKey.toKey(path);
        } else if (_typeof(path) === 'object') {
          var _path;
          if (Object.is((_path = path) === null || _path === void 0 ? void 0 : _path.valueOf(), -0)) {
            path = '-0';
          } else {
            path = String(path);
          }
        }
        if ((obj === null || obj === void 0 ? void 0 : obj[path]) === undefined) {
          return true;
        }
        try {
          delete obj[path];
          return true;
        } catch (_unused) {
          return false;
        }
      }
    case 'string':
      {
        if ((obj === null || obj === void 0 ? void 0 : obj[path]) === undefined && isDeepKey.isDeepKey(path)) {
          return unsetWithPath(obj, toPath.toPath(path));
        }
        try {
          delete obj[path];
          return true;
        } catch (_unused2) {
          return false;
        }
      }
  }
}
function unsetWithPath(obj, path) {
  var parent = get.get(obj, path.slice(0, -1), obj);
  var lastKey = path[path.length - 1];
  if ((parent === null || parent === void 0 ? void 0 : parent[lastKey]) === undefined) {
    return true;
  }
  try {
    delete parent[lastKey];
    return true;
  } catch (_unused3) {
    return false;
  }
}
exports.unset = unset;
