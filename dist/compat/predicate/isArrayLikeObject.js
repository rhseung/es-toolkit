'use strict';

var isArrayLike = require('./isArrayLike.js');
var isObjectLike = require('./isObjectLike.js');
function isArrayLikeObject(value) {
  return isObjectLike.isObjectLike(value) && isArrayLike.isArrayLike(value);
}
exports.isArrayLikeObject = isArrayLikeObject;
