'use strict';

function intersectionBy(firstArr, secondArr, mapper) {
  var mappedSecondSet = new Set(secondArr.map(mapper));
  return firstArr.filter(function (item) {
    return mappedSecondSet.has(mapper(item));
  });
}
exports.intersectionBy = intersectionBy;
