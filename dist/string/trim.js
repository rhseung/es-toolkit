'use strict';

var trimStart = require('./trimStart.js');
var trimEnd = require('./trimEnd.js');
function trim(str, chars) {
  if (chars === undefined) {
    return str.trim();
  }
  return trimStart.trimStart(trimEnd.trimEnd(str, chars), chars);
}
exports.trim = trim;
