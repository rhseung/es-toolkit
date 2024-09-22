'use strict';

var orderBy = require('./orderBy.js');
function sortBy(collection, criteria) {
  return orderBy.orderBy(collection, criteria, ['asc']);
}
exports.sortBy = sortBy;
