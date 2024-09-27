'use strict';

function minBy(items, getValue) {
  var minElement = items[0];
  var min = Infinity;
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    var value = getValue(element);
    if (value < min) {
      min = value;
      minElement = element;
    }
  }
  return minElement;
}
exports.minBy = minBy;
