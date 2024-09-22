'use strict';

function toKey(value) {
  if (Object.is(value, -0)) {
    return '-0';
  }
  return value.toString();
}
exports.toKey = toKey;
