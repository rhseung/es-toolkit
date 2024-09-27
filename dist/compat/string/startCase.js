'use strict';

var getWords = require('../../string/_internal/getWords.js');
var normalizeForCase = require('../_internal/normalizeForCase.js');
function startCase(str) {
  var words = getWords.getWords(normalizeForCase.normalizeForCase(str).trim());
  var result = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (result) {
      result += ' ';
    }
    if (word === word.toUpperCase()) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return result;
}
exports.startCase = startCase;
