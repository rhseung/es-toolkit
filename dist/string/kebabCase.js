'use strict';

var getWords = require('./_internal/getWords.js');
function kebabCase(str) {
  var words = getWords.getWords(str);
  return words.map(function (word) {
    return word.toLowerCase();
  }).join('-');
}
exports.kebabCase = kebabCase;
