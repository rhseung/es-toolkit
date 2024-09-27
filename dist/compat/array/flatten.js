'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function flatten(value) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = [];
  var flooredDepth = Math.floor(depth);
  if (!Array.isArray(value)) {
    return result;
  }
  var _recursive = function recursive(arr, currentDepth) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (currentDepth < flooredDepth && (Array.isArray(item) || Boolean(item === null || item === void 0 ? void 0 : item[Symbol.isConcatSpreadable]) || item !== null && _typeof(item) === 'object' && Object.prototype.toString.call(item) === '[object Arguments]')) {
        if (Array.isArray(item)) {
          _recursive(item, currentDepth + 1);
        } else {
          _recursive(Array.from(item), currentDepth + 1);
        }
      } else {
        result.push(item);
      }
    }
  };
  _recursive(value, 0);
  return result;
}
exports.flatten = flatten;
