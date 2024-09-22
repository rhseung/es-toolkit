'use strict';

function spread(func) {
  return function (argsArr) {
    return func.apply(this, argsArr);
  };
}
exports.spread = spread;
