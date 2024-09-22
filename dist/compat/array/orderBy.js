'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var compareValues = require('../_internal/compareValues.js');
var isKey = require('../_internal/isKey.js');
var toPath = require('../util/toPath.js');
function orderBy(collection, criteria, orders) {
  if (collection == null || typeof collection === 'number') {
    return [];
  }
  if (_typeof(collection) === 'object' && !Array.isArray(collection)) {
    collection = Object.keys(collection).map(function (key) {
      return collection[key];
    });
  }
  if (!Array.isArray(criteria)) {
    criteria = criteria == null ? [null] : [criteria];
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  orders = orders.map(function (order) {
    return String(order);
  });
  var getValueByNestedPath = function getValueByNestedPath(object, path) {
    var target = object;
    for (var i = 0; i < path.length && target != null; ++i) {
      target = target[path[i]];
    }
    return target;
  };
  var getValueByCriterion = function getValueByCriterion(criterion, object) {
    if (object == null || criterion == null) {
      return object;
    }
    if (_typeof(criterion) === 'object' && 'key' in criterion) {
      if (Object.hasOwn(object, criterion.key)) {
        return object[criterion.key];
      }
      return getValueByNestedPath(object, criterion.path);
    }
    if (typeof criterion === 'function') {
      return criterion(object);
    }
    if (Array.isArray(criterion)) {
      return getValueByNestedPath(object, criterion);
    }
    if (_typeof(object) === 'object') {
      return object[criterion];
    }
    return object;
  };
  var preparedCriteria = criteria.map(function (criterion) {
    if (Array.isArray(criterion) && criterion.length === 1) {
      criterion = criterion[0];
    }
    if (criterion == null || typeof criterion === 'function' || Array.isArray(criterion) || isKey.isKey(criterion)) {
      return criterion;
    }
    return {
      key: criterion,
      path: toPath.toPath(criterion)
    };
  });
  var preparedCollection = collection.map(function (item) {
    return {
      original: item,
      criteria: preparedCriteria.map(function (criterion) {
        return getValueByCriterion(criterion, item);
      })
    };
  });
  return preparedCollection.slice().sort(function (a, b) {
    for (var i = 0; i < preparedCriteria.length; i++) {
      var comparedResult = compareValues.compareValues(a.criteria[i], b.criteria[i], orders[i]);
      if (comparedResult !== 0) {
        return comparedResult;
      }
    }
    return 0;
  }).map(function (item) {
    return item.original;
  });
}
exports.orderBy = orderBy;
