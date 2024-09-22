'use strict';

function compareValues(a, b, order) {
  if (a < b) {
    return order === 'asc' ? -1 : 1;
  }
  if (a > b) {
    return order === 'asc' ? 1 : -1;
  }
  return 0;
}
exports.compareValues = compareValues;
