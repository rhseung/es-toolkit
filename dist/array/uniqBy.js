'use strict';

function uniqBy(arr, mapper) {
  var map = new Map();
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = mapper(item);
    if (!map.has(key)) {
      map.set(key, item);
    }
  }
  return Array.from(map.values());
}
exports.uniqBy = uniqBy;
