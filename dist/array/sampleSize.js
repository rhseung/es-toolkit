'use strict';

var randomInt = require('../math/randomInt.js');
function sampleSize(array, size) {
  if (size > array.length) {
    throw new Error('Size must be less than or equal to the length of array.');
  }
  var result = new Array(size);
  var selected = new Set();
  for (var step = array.length - size, resultIndex = 0; step < array.length; step++, resultIndex++) {
    var index = randomInt.randomInt(0, step + 1);
    if (selected.has(index)) {
      index = step;
    }
    selected.add(index);
    result[resultIndex] = array[index];
  }
  return result;
}
exports.sampleSize = sampleSize;
