'use strict';

var cloneDeep = require('./cloneDeep.js');
var merge = require('./merge.js');
function toMerged(target, source) {
  return merge.merge(cloneDeep.cloneDeep(target), source);
}
exports.toMerged = toMerged;
