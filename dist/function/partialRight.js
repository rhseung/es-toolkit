'use strict';

function partialRight(func) {
  for (var _len = arguments.length, partialArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partialArgs[_key - 1] = arguments[_key];
  }
  return function () {
    var placeholderLength = partialArgs.filter(function (arg) {
      return arg === partialRightPlaceholder;
    }).length;
    var rangeLength = Math.max(arguments.length - placeholderLength, 0);
    var args = [];
    var providedIndex = 0;
    for (var i = 0; i < rangeLength; i++) {
      var _providedIndex;
      args.push((_providedIndex = providedIndex++, _providedIndex < 0 || arguments.length <= _providedIndex ? undefined : arguments[_providedIndex]));
    }
    for (var _i = 0; _i < partialArgs.length; _i++) {
      var arg = partialArgs[_i];
      if (arg === partialRight.placeholder) {
        var _providedIndex2;
        args.push((_providedIndex2 = providedIndex++, _providedIndex2 < 0 || arguments.length <= _providedIndex2 ? undefined : arguments[_providedIndex2]));
      } else {
        args.push(arg);
      }
    }
    return func.apply(this, args);
  };
}
var partialRightPlaceholder = Symbol('partialRight.placeholder');
partialRight.placeholder = partialRightPlaceholder;
exports.partialRight = partialRight;
