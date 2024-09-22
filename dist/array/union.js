'use strict';

var uniq = require('./uniq.js');
function union(arr1, arr2) {
  return uniq.uniq(arr1.concat(arr2));
}
exports.union = union;
