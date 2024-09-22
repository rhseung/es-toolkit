'use strict';

var mean = require('./mean.js');
function meanBy(items, getValue) {
  var nums = items.map(function (x) {
    return getValue(x);
  });
  return mean.mean(nums);
}
exports.meanBy = meanBy;
