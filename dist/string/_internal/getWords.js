'use strict';

var CASE_SPLIT_PATTERN = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
function getWords(str) {
  var _str$match;
  return Array.from((_str$match = str.match(CASE_SPLIT_PATTERN)) !== null && _str$match !== void 0 ? _str$match : []);
}
exports.getWords = getWords;
