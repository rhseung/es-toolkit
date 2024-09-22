'use strict';

function once(func) {
  var called = false;
  var cache;
  return function () {
    if (called) {
      return cache;
    }
    var result = func();
    called = true;
    cache = result;
    return result;
  };
}
exports.once = once;
