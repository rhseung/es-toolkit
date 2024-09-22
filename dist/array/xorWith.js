'use strict';

var differenceWith = require('./differenceWith.js');
var intersectionWith = require('./intersectionWith.js');
var unionWith = require('./unionWith.js');
function xorWith(arr1, arr2, areElementsEqual) {
  var union = unionWith.unionWith(arr1, arr2, areElementsEqual);
  var intersection = intersectionWith.intersectionWith(arr1, arr2, areElementsEqual);
  return differenceWith.differenceWith(union, intersection, areElementsEqual);
}
exports.xorWith = xorWith;
