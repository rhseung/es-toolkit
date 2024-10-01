export { i as isArrayBuffer, a as isDate, b as isEqual, j as isFunction, n as isJSONArray, l as isJSONObject, m as isJSONValue, h as isLength, c as isMap, d as isNil, e as isNotNil, f as isNull, k as isRegExp, o as isSet, g as isUndefined, p as isWeakMap, q as isWeakSet } from '../_chunk/isWeakSet-Czclwe.mjs';
export { i as isPlainObject, b as isPrimitive, a as isTypedArray } from '../_chunk/isPlainObject-D5pylh.mjs';

function isError(value) {
    return value instanceof Error;
}

function isBoolean(x) {
    return typeof x === 'boolean';
}

function isSymbol(value) {
    return typeof value === 'symbol';
}

function isString(value) {
    return typeof value === 'string';
}

export { isBoolean, isError, isString, isSymbol };
