'use strict';

var sum = require('./sum.js');
function mean(nums) {
  return sum.sum(nums) / nums.length;
}
exports.mean = mean;
