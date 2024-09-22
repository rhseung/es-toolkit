'use strict';

function pad(str, length) {
  var chars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return str.padStart(Math.floor((length - str.length) / 2) + str.length, chars).padEnd(length, chars);
}
exports.pad = pad;
