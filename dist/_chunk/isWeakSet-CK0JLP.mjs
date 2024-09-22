import { i as isPlainObject } from './isPlainObject-CmlJbQ.mjs';

function isDate(value) {
    return value instanceof Date;
}

const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const numberTag = '[object Number]';
const booleanTag = '[object Boolean]';
const argumentsTag = '[object Arguments]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const functionTag = '[object Function]';
const arrayBufferTag = '[object ArrayBuffer]';
const objectTag = '[object Object]';
const errorTag = '[object Error]';
const dataViewTag = '[object DataView]';
const uint8ArrayTag = '[object Uint8Array]';
const uint8ClampedArrayTag = '[object Uint8ClampedArray]';
const uint16ArrayTag = '[object Uint16Array]';
const uint32ArrayTag = '[object Uint32Array]';
const bigUint64ArrayTag = '[object BigUint64Array]';
const int8ArrayTag = '[object Int8Array]';
const int16ArrayTag = '[object Int16Array]';
const int32ArrayTag = '[object Int32Array]';
const bigInt64ArrayTag = '[object BigInt64Array]';
const float32ArrayTag = '[object Float32Array]';
const float64ArrayTag = '[object Float64Array]';

function getSymbols(object) {
    return Object.getOwnPropertySymbols(object).filter(symbol => Object.prototype.propertyIsEnumerable.call(object, symbol));
}

function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
}

function isEqual(a, b) {
    if (typeof a === typeof b) {
        switch (typeof a) {
            case 'bigint':
            case 'string':
            case 'boolean':
            case 'symbol':
            case 'undefined': {
                return a === b;
            }
            case 'number': {
                return a === b || Object.is(a, b);
            }
            case 'function': {
                return a === b;
            }
            case 'object': {
                return areObjectsEqual(a, b);
            }
        }
    }
    return areObjectsEqual(a, b);
}
function areObjectsEqual(a, b, stack) {
    if (Object.is(a, b)) {
        return true;
    }
    let aTag = getTag(a);
    let bTag = getTag(b);
    if (aTag === argumentsTag) {
        aTag = objectTag;
    }
    if (bTag === argumentsTag) {
        bTag = objectTag;
    }
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case stringTag:
            return a.toString() === b.toString();
        case numberTag: {
            const x = a.valueOf();
            const y = b.valueOf();
            return x === y || (Number.isNaN(x) && Number.isNaN(y));
        }
        case booleanTag:
        case dateTag:
        case symbolTag:
            return Object.is(a.valueOf(), b.valueOf());
        case regexpTag: {
            return a.source === b.source && a.flags === b.flags;
        }
        case functionTag: {
            return a === b;
        }
    }
    stack = stack ?? new Map();
    const aStack = stack.get(a);
    const bStack = stack.get(b);
    if (aStack != null && bStack != null) {
        return aStack === b;
    }
    stack.set(a, b);
    stack.set(b, a);
    try {
        switch (aTag) {
            case mapTag: {
                if (a.size !== b.size) {
                    return false;
                }
                for (const [key, value] of a.entries()) {
                    if (!b.has(key) || !areObjectsEqual(value, b.get(key), stack)) {
                        return false;
                    }
                }
                return true;
            }
            case setTag: {
                if (a.size !== b.size) {
                    return false;
                }
                const aValues = Array.from(a.values());
                const bValues = Array.from(b.values());
                for (let i = 0; i < aValues.length; i++) {
                    const aValue = aValues[i];
                    const index = bValues.findIndex(bValue => {
                        return areObjectsEqual(aValue, bValue, stack);
                    });
                    if (index === -1) {
                        return false;
                    }
                    bValues.splice(index, 1);
                }
                return true;
            }
            case arrayTag:
            case uint8ArrayTag:
            case uint8ClampedArrayTag:
            case uint16ArrayTag:
            case uint32ArrayTag:
            case bigUint64ArrayTag:
            case int8ArrayTag:
            case int16ArrayTag:
            case int32ArrayTag:
            case bigInt64ArrayTag:
            case float32ArrayTag:
            case float64ArrayTag: {
                if (typeof Buffer !== 'undefined' && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) {
                    return false;
                }
                if (a.length !== b.length) {
                    return false;
                }
                for (let i = 0; i < a.length; i++) {
                    if (!areObjectsEqual(a[i], b[i], stack)) {
                        return false;
                    }
                }
                return true;
            }
            case arrayBufferTag: {
                if (a.byteLength !== b.byteLength) {
                    return false;
                }
                return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack);
            }
            case dataViewTag: {
                if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) {
                    return false;
                }
                return areObjectsEqual(a.buffer, b.buffer, stack);
            }
            case errorTag: {
                return a.name === b.name && a.message === b.message;
            }
            case objectTag: {
                const areEqualInstances = areObjectsEqual(a.constructor, b.constructor, stack) || (isPlainObject(a) && isPlainObject(b));
                if (!areEqualInstances) {
                    return false;
                }
                const aKeys = [...Object.keys(a), ...getSymbols(a)];
                const bKeys = [...Object.keys(b), ...getSymbols(b)];
                if (aKeys.length !== bKeys.length) {
                    return false;
                }
                for (let i = 0; i < aKeys.length; i++) {
                    const propKey = aKeys[i];
                    const aProp = a[propKey];
                    if (!Object.prototype.hasOwnProperty.call(b, propKey)) {
                        return false;
                    }
                    const bProp = b[propKey];
                    if (!areObjectsEqual(aProp, bProp, stack)) {
                        return false;
                    }
                }
                return true;
            }
            default: {
                return false;
            }
        }
    }
    finally {
        stack.delete(a);
        stack.delete(b);
    }
}

function isNil(x) {
    return x == null;
}

function isNotNil(x) {
    return x != null;
}

function isNull(x) {
    return x === null;
}

function isUndefined(x) {
    return x === undefined;
}

function isLength(value) {
    return Number.isSafeInteger(value) && value >= 0;
}

function isFunction(value) {
    return typeof value === 'function';
}

function isWeakMap(value) {
    return value instanceof WeakMap;
}

function isWeakSet(value) {
    return value instanceof WeakSet;
}

export { isEqual as a, isNil as b, isNotNil as c, isNull as d, isUndefined as e, isLength as f, isFunction as g, isWeakMap as h, isDate as i, isWeakSet as j, argumentsTag as k, booleanTag as l, getTag as m, numberTag as n, getSymbols as o, stringTag as s };
