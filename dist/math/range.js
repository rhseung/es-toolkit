'use strict';

function range(start, end, step) {
  if (end == null) {
    end = start;
    start = 0;
  }
  if (step == null) {
    step = 1;
  }
  if (!Number.isInteger(step) || step === 0) {
    throw new Error("The step value must be a non-zero integer.");
  }
  var length = Math.max(Math.ceil((end - start) / step), 0);
  var result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = start + i * step;
  }
  return result;
}
exports.range = range;
