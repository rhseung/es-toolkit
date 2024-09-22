'use strict';

function endsWith(str, target) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length;
  return str.endsWith(target, position);
}
exports.endsWith = endsWith;
