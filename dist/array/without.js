'use strict';

function without(array) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var valuesSet = new Set(values);
  return array.filter(function (item) {
    return !valuesSet.has(item);
  });
}
exports.without = without;
