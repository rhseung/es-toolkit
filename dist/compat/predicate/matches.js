'use strict';

var isMatch = require('./isMatch.js');
var cloneDeep = require('../../object/cloneDeep.js');
function matches(source) {
  source = cloneDeep.cloneDeep(source);
  return function (target) {
    return isMatch.isMatch(target, source);
  };
}
exports.matches = matches;
