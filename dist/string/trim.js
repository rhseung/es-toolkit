'use strict';

var trimEnd = require('./trimEnd.js');
var trimStart = require('./trimStart.js');
function trim(str, chars) {
  if (chars === undefined) {
    return str.trim();
  }
  return trimStart.trimStart(trimEnd.trimEnd(str, chars), chars);
}
exports.trim = trim;
