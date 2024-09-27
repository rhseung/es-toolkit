'use strict';

function conformsTo(target, source) {
  if (source == null) {
    return true;
  }
  if (target == null) {
    return Object.keys(source).length === 0;
  }
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var predicate = source[key];
    var value = target[key];
    if (value === undefined && !(key in target) || !predicate(value)) {
      return false;
    }
  }
  return true;
}
exports.conformsTo = conformsTo;
