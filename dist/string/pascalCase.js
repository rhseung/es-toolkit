'use strict';

var getWords = require('./_internal/getWords.js');
var capitalize = require('./capitalize.js');
function pascalCase(str) {
  var words = getWords.getWords(str);
  return words.map(function (word) {
    return capitalize.capitalize(word);
  }).join('');
}
exports.pascalCase = pascalCase;
