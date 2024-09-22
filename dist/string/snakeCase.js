'use strict';

var getWords = require('./_internal/getWords.js');
function snakeCase(str) {
  var words = getWords.getWords(str);
  return words.map(function (word) {
    return word.toLowerCase();
  }).join('_');
}
exports.snakeCase = snakeCase;
