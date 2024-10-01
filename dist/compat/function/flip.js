'use strict';

function flip(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return func.apply(this, args.reverse());
  };
}
exports.flip = flip;
