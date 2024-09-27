'use strict';

function uniqWith(arr, areItemsEqual) {
  var result = [];
  var _loop = function _loop() {
    var item = arr[i];
    var isUniq = result.every(function (v) {
      return !areItemsEqual(v, item);
    });
    if (isUniq) {
      result.push(item);
    }
  };
  for (var i = 0; i < arr.length; i++) {
    _loop();
  }
  return result;
}
exports.uniqWith = uniqWith;
