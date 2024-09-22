'use strict';

function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter(function (symbol) {
    return Object.prototype.propertyIsEnumerable.call(object, symbol);
  });
}
exports.getSymbols = getSymbols;
