'use strict';

function ary(func, n) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return func.apply(this, args.slice(0, n));
  };
}
exports.ary = ary;
