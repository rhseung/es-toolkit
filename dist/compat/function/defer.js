'use strict';

function defer(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return setTimeout.apply(void 0, [func, 1].concat(args));
}
exports.defer = defer;
