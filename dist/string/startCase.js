'use strict';

var getWords = require('./_internal/getWords.js');
function startCase(str) {
  var words = getWords.getWords(str.trim());
  var result = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (result) {
      result += ' ';
    }
    result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return result;
}
exports.startCase = startCase;
