'use strict';

var getWords = require('./_internal/getWords.js');
function constantCase(str) {
  var words = getWords.getWords(str);
  return words.map(function (word) {
    return word.toUpperCase();
  }).join('_');
}
exports.constantCase = constantCase;
