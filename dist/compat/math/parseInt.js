'use strict';

function parseInt(string) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var guard = arguments.length > 2 ? arguments[2] : undefined;
  if (guard) {
    radix = 0;
  }
  return Number.parseInt(string, radix);
}
exports.parseInt = parseInt;
