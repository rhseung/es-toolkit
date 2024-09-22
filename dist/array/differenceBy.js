'use strict';

function differenceBy(firstArr, secondArr, mapper) {
  var mappedSecondSet = new Set(secondArr.map(function (item) {
    return mapper(item);
  }));
  return firstArr.filter(function (item) {
    return !mappedSecondSet.has(mapper(item));
  });
}
exports.differenceBy = differenceBy;
