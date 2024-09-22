'use strict';

var getWords = require('./_internal/getWords.js');
function lowerCase(str) {
  var words = getWords.getWords(str);
  return words.map(function (word) {
    return word.toLowerCase();
  }).join(' ');
}
exports.lowerCase = lowerCase;
