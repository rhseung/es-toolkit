'use strict';

function maxBy(items, getValue) {
  var maxElement = items[0];
  var max = -Infinity;
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    var value = getValue(element);
    if (value > max) {
      max = value;
      maxElement = element;
    }
  }
  return maxElement;
}
exports.maxBy = maxBy;
