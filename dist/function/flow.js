'use strict';

function flow() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var result = funcs.length ? funcs[0].apply(this, args) : args[0];
    for (var i = 1; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
}
exports.flow = flow;
