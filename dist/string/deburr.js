'use strict';

function _objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);
  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);
  return entries;
}
var deburrMap = new Map(_objectEntries({
  Æ: 'Ae',
  Ð: 'D',
  Ø: 'O',
  Þ: 'Th',
  ß: 'ss',
  æ: 'ae',
  ð: 'd',
  ø: 'o',
  þ: 'th',
  Đ: 'D',
  đ: 'd',
  Ħ: 'H',
  ħ: 'h',
  ı: 'i',
  Ĳ: 'IJ',
  ĳ: 'ij',
  ĸ: 'k',
  Ŀ: 'L',
  ŀ: 'l',
  Ł: 'L',
  ł: 'l',
  ŉ: "'n",
  Ŋ: 'N',
  ŋ: 'n',
  Œ: 'Oe',
  œ: 'oe',
  Ŧ: 'T',
  ŧ: 't',
  ſ: 's'
}));
function deburr(str) {
  str = str.normalize('NFD');
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var _deburrMap$get;
    var _char = str[i];
    if (_char >= "\u0300" && _char <= "\u036F" || _char >= "\uFE20" && _char <= "\uFE23") {
      continue;
    }
    result += (_deburrMap$get = deburrMap.get(_char)) !== null && _deburrMap$get !== void 0 ? _deburrMap$get : _char;
  }
  return result;
}
exports.deburr = deburr;
