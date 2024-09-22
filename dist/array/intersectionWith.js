'use strict';

function intersectionWith(firstArr, secondArr, areItemsEqual) {
  return firstArr.filter(function (firstItem) {
    return secondArr.some(function (secondItem) {
      return areItemsEqual(firstItem, secondItem);
    });
  });
}
exports.intersectionWith = intersectionWith;
