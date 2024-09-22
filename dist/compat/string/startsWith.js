'use strict';

function startsWith(str, target) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return str.startsWith(target, position);
}
exports.startsWith = startsWith;
