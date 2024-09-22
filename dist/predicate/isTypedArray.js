'use strict';

function isTypedArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
exports.isTypedArray = isTypedArray;
