'use strict';

function min() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minElement = items[0];
  var min = undefined;
  for (var i = 0; i < items.length; i++) {
    var element = items[i];
    if (min == null || element < min) {
      min = element;
      minElement = element;
    }
  }
  return minElement;
}
exports.min = min;
