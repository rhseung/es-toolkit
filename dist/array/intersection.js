'use strict';

function intersection(firstArr, secondArr) {
  var secondSet = new Set(secondArr);
  return firstArr.filter(function (item) {
    return secondSet.has(item);
  });
}
exports.intersection = intersection;
