'use strict';

var sum = require('./sum.js');
function sumBy(items, getValue) {
  var nums = items.map(function (x) {
    return getValue(x);
  });
  return sum.sum(nums);
}
exports.sumBy = sumBy;
