'use strict';

var compareValues = require('../_internal/compareValues.js');
function orderBy(arr, criteria, orders) {
  return arr.slice().sort(function (a, b) {
    var ordersLength = orders.length;
    for (var i = 0; i < criteria.length; i++) {
      var order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
      var criterion = criteria[i];
      var criterionIsFunction = typeof criterion === 'function';
      var valueA = criterionIsFunction ? criterion(a) : a[criterion];
      var valueB = criterionIsFunction ? criterion(b) : b[criterion];
      var result = compareValues.compareValues(valueA, valueB, order);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  });
}
exports.orderBy = orderBy;
