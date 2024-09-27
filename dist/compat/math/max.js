'use strict';

function max() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var maxElement = items[0];
  var max = undefined;
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    if (max == null || element > max) {
      max = element;
      maxElement = element;
    }
  }
  return maxElement;
}
exports.max = max;
