'use strict';

var uniqWith = require('./uniqWith.js');
function unionWith(arr1, arr2, areItemsEqual) {
  return uniqWith.uniqWith(arr1.concat(arr2), areItemsEqual);
}
exports.unionWith = unionWith;
