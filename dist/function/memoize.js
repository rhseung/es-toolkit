'use strict';

function memoize(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$cache = options.cache,
    cache = _options$cache === void 0 ? new Map() : _options$cache,
    getCacheKey = options.getCacheKey;
  var memoizedFn = function memoizedFn(arg) {
    var key = getCacheKey ? getCacheKey(arg) : arg;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = fn.call(this, arg);
    cache.set(key, result);
    return result;
  };
  memoizedFn.cache = cache;
  return memoizedFn;
}
exports.memoize = memoize;
