'use strict';

var cloneDeep = require('../../object/cloneDeep.js');
var isMatch = require('./isMatch.js');
function matches(source) {
  source = cloneDeep.cloneDeep(source);
  return function (target) {
    return isMatch.isMatch(target, source);
  };
}
exports.matches = matches;
