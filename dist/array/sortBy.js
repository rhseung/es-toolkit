'use strict';

var orderBy = require('./orderBy.js');
function sortBy(arr, criteria) {
  return orderBy.orderBy(arr, criteria, ['asc']);
}
exports.sortBy = sortBy;
