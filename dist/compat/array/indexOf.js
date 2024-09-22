'use strict';

function indexOf(array, searchElement, fromIndex) {
  if (array == null) {
    return -1;
  }
  if (Number.isNaN(searchElement)) {
    var _fromIndex;
    fromIndex = (_fromIndex = fromIndex) !== null && _fromIndex !== void 0 ? _fromIndex : 0;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, array.length + fromIndex);
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (Number.isNaN(array[i])) {
        return i;
      }
    }
    return -1;
  }
  return array.indexOf(searchElement, fromIndex);
}
exports.indexOf = indexOf;
