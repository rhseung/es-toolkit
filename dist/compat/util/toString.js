'use strict';

function toString(value) {
  if (value == null) {
    return '';
  }
  if (Array.isArray(value)) {
    return value.map(toString).join(',');
  }
  var result = String(value);
  if (result === '0' && Object.is(Number(value), -0)) {
    return '-0';
  }
  return result;
}
exports.toString = toString;
