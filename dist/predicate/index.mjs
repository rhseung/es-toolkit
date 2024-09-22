export { i as isDate, a as isEqual, g as isFunction, f as isLength, b as isNil, c as isNotNil, d as isNull, e as isUndefined, h as isWeakMap, j as isWeakSet } from '../_chunk/isWeakSet-CK0JLP.mjs';
export { i as isPlainObject, b as isPrimitive, a as isTypedArray } from '../_chunk/isPlainObject-CmlJbQ.mjs';

function isRegExp(value) {
    return value instanceof RegExp;
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

export { isBoolean, isRegExp, isString, isSymbol };
