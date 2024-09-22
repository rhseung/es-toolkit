'use strict';

function partial(func) {
  for (var _len = arguments.length, partialArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partialArgs[_key - 1] = arguments[_key];
  }
  return function () {
    var args = [];
    var startIndex = 0;
    for (var i = 0; i < partialArgs.length; i++) {
      var arg = partialArgs[i];
      if (arg === partial.placeholder) {
        var _startIndex;
        args.push((_startIndex = startIndex++, _startIndex < 0 || arguments.length <= _startIndex ? undefined : arguments[_startIndex]));
      } else {
        args.push(arg);
      }
    }
    for (var _i = startIndex; _i < arguments.length; _i++) {
      args.push(_i < 0 || arguments.length <= _i ? undefined : arguments[_i]);
    }
    return func.apply(this, args);
  };
}
var partialPlaceholder = Symbol('partial.placeholder');
partial.placeholder = partialPlaceholder;
exports.partial = partial;
