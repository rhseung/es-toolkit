'use strict';

var difference = require('./difference.js');
var intersection = require('./intersection.js');
var union = require('./union.js');
function xor(arr1, arr2) {
  return difference.difference(union.union(arr1, arr2), intersection.intersection(arr1, arr2));
}
exports.xor = xor;
