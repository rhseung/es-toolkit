'use strict';

function differenceWith(firstArr, secondArr, areItemsEqual) {
  return firstArr.filter(function (firstItem) {
    return secondArr.every(function (secondItem) {
      return !areItemsEqual(firstItem, secondItem);
    });
  });
}
exports.differenceWith = differenceWith;
