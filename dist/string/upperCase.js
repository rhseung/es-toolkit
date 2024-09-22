'use strict';

var getWords = require('./_internal/getWords.js');
function upperCase(str) {
  var words = getWords.getWords(str);
  var result = '';
  for (var i = 0; i < words.length; i++) {
    result += words[i].toUpperCase();
    if (i < words.length - 1) {
      result += ' ';
    }
  }
  return result;
}
exports.upperCase = upperCase;
