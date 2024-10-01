'use strict';

var isDeepKey = require('../_internal/isDeepKey.js');
var isIndex = require('../_internal/isIndex.js');
var isArguments = require('../predicate/isArguments.js');
var toPath = require('../util/toPath.js');
function has(object, path) {
  var resolvedPath;
  if (Array.isArray(path)) {
    resolvedPath = path;
  } else if (typeof path === 'string' && isDeepKey.isDeepKey(path) && (object === null || object === void 0 ? void 0 : object[path]) == null) {
    resolvedPath = toPath.toPath(path);
  } else {
    resolvedPath = [path];
  }
  if (resolvedPath.length === 0) {
    return false;
  }
  var current = object;
  for (var i = 0; i < resolvedPath.length; i++) {
    var key = resolvedPath[i];
    if (current == null || !Object.hasOwn(current, key)) {
      var isSparseIndex = (Array.isArray(current) || isArguments.isArguments(current)) && isIndex.isIndex(key) && key < current.length;
      if (!isSparseIndex) {
        return false;
      }
    }
    current = current[key];
  }
  return true;
}
exports.has = has;
