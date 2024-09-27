export { i as isDate, a as isEqual, h as isFunction, g as isLength, b as isMap, c as isNil, d as isNotNil, e as isNull, j as isRegExp, k as isSet, f as isUndefined, l as isWeakMap, m as isWeakSet } from '../_chunk/isWeakSet-DkfgKz.mjs';
export { i as isPlainObject, b as isPrimitive, a as isTypedArray } from '../_chunk/isPlainObject-CmlJbQ.mjs';

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
