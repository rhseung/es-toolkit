'use strict';

function drop(collection, itemsCount) {
  if (collection === null || collection === undefined) {
    return [];
  }
  itemsCount = Math.max(itemsCount, 0);
  return collection.slice(itemsCount);
}
exports.drop = drop;
