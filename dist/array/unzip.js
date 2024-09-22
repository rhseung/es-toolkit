'use strict';

function unzip(zipped) {
  var maxLen = 0;
  for (var i = 0; i < zipped.length; i++) {
    if (zipped[i].length > maxLen) {
      maxLen = zipped[i].length;
    }
  }
  var result = new Array(maxLen);
  for (var _i = 0; _i < maxLen; _i++) {
    result[_i] = new Array(zipped.length);
    for (var j = 0; j < zipped.length; j++) {
      result[_i][j] = zipped[j][_i];
    }
  }
  return result;
}
exports.unzip = unzip;
