'use strict';

var flattenDeep = require('./flattenDeep.js');
function flatMapDeep(arr, iteratee) {
  return flattenDeep.flattenDeep(arr.map(function (item) {
    return iteratee(item);
  }));
}
exports.flatMapDeep = flatMapDeep;
