'use strict';

var flatten = require('../array/flatten.js');
function rearg(func) {
  for (var _len = arguments.length, indices = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    indices[_key - 1] = arguments[_key];
  }
  var flattenIndices = flatten.flatten(indices);
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var reorderedArgs = flattenIndices.map(function (i) {
      return args[i];
    }).slice(0, args.length);
    for (var i = reorderedArgs.length; i < args.length; i++) {
      reorderedArgs.push(args[i]);
    }
    return func.apply(this, reorderedArgs);
  };
}
exports.rearg = rearg;
