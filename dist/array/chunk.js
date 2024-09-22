'use strict';

function chunk(arr, size) {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('Size must be an integer greater than zero.');
  }
  var chunkLength = Math.ceil(arr.length / size);
  var result = Array(chunkLength);
  for (var index = 0; index < chunkLength; index++) {
    var start = index * size;
    var end = start + size;
    result[index] = arr.slice(start, end);
  }
  return result;
}
exports.chunk = chunk;
