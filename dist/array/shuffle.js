'use strict';

function shuffle(arr) {
  var result = arr.slice();
  for (var i = result.length - 1; i >= 1; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [result[j], result[i]];
    result[i] = _ref[0];
    result[j] = _ref[1];
  }
  return result;
}
exports.shuffle = shuffle;
