'use strict';

function join(array) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  return array.join(separator);
}
exports.join = join;
