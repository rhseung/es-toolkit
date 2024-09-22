'use strict';

function difference(firstArr, secondArr) {
  var secondSet = new Set(secondArr);
  return firstArr.filter(function (item) {
    return !secondSet.has(item);
  });
}
exports.difference = difference;
