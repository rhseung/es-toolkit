'use strict';

var chunk$1 = require('../../array/chunk.js');
function chunk(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  size = Math.max(Math.floor(size), 0);
  if (size === 0) {
    return [];
  }
  return chunk$1.chunk(arr, size);
}
exports.chunk = chunk;
