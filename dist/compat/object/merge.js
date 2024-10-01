'use strict';

var mergeWith = require('./mergeWith.js');
var noop = require('../../function/noop.js');
function merge(object) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  return mergeWith.mergeWith.apply(mergeWith, [object].concat(sources, [noop.noop]));
}
exports.merge = merge;
