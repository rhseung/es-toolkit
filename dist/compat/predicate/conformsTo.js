'use strict';

function conformsTo(target, source) {
  if (source == null) {
    return true;
  }
  if (target == null) {
    return Object.keys(source).length === 0;
  }
  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var predicate = source[key];
    var value = target[key];
    if (value === undefined && !(key in target) || !predicate(value)) {
      return false;
    }
  }
  return true;
}
exports.conformsTo = conformsTo;
