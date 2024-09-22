'use strict';

var isIndex = require('../_internal/isIndex.js');
var toPath = require('../util/toPath.js');
function set(obj, path, value) {
  var resolvedPath = Array.isArray(path) ? path : typeof path === 'string' ? toPath.toPath(path) : [path];
  var current = obj;
  for (var i = 0; i < resolvedPath.length - 1; i++) {
    var key = resolvedPath[i];
    var nextKey = resolvedPath[i + 1];
    if (current[key] == null) {
      current[key] = isIndex.isIndex(nextKey) ? [] : {};
    }
    current = current[key];
  }
  var lastKey = resolvedPath[resolvedPath.length - 1];
  current[lastKey] = value;
  return obj;
}
exports.set = set;
