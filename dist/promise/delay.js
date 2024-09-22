'use strict';

var AbortError = require('../error/AbortError.js');
function delay(ms) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    signal = _ref.signal;
  return new Promise(function (resolve, reject) {
    var abortError = function abortError() {
      reject(new AbortError.AbortError());
    };
    var abortHandler = function abortHandler() {
      clearTimeout(timeoutId);
      abortError();
    };
    if (signal !== null && signal !== void 0 && signal.aborted) {
      return abortError();
    }
    var timeoutId = setTimeout(function () {
      signal === null || signal === void 0 || signal.removeEventListener('abort', abortHandler);
      resolve();
    }, ms);
    signal === null || signal === void 0 || signal.addEventListener('abort', abortHandler, {
      once: true
    });
  });
}
exports.delay = delay;
