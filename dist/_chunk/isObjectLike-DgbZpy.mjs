import { b as isPrimitive, a as isTypedArray, i as isPlainObject } from './isPlainObject-D5pylh.mjs';

function omitBy(obj, shouldOmit) {
    const result = {};
    const objEntries = Object.entries(obj);
    for (let i = 0; i < objEntries.length; i++) {
        const [key, value] = objEntries[i];
        if (!shouldOmit(value, key)) {
            result[key] = value;
        }
    }
    return result;
}

function pickBy(obj, shouldPick) {
    const result = {};
    const objEntries = Object.entries(obj);
    for (let i = 0; i < objEntries.length; i++) {
        const [key, value] = objEntries[i];
        if (shouldPick(value, key)) {
            result[key] = value;
        }
    }
    return result;
}

function invert(obj) {
    const result = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj[key];
        result[value] = key;
    }
    return result;
}

function clone(obj) {
    if (isPrimitive(obj)) {
        return obj;
    }
    if (Array.isArray(obj) ||
        isTypedArray(obj) ||
        obj instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer !== 'undefined' && obj instanceof SharedArrayBuffer)) {
        return obj.slice(0);
    }
    const prototype = Object.getPrototypeOf(obj);
    const Constructor = prototype.constructor;
    if (obj instanceof Date || obj instanceof Map || obj instanceof Set) {
        return new Constructor(obj);
    }
    if (obj instanceof RegExp) {
        const newRegExp = new Constructor(obj);
        newRegExp.lastIndex = obj.lastIndex;
        return newRegExp;
    }
    if (obj instanceof DataView) {
        return new Constructor(obj.buffer.slice(0));
    }
    if (obj instanceof Error) {
        const newError = new Constructor(obj.message);
        newError.stack = obj.stack;
        newError.name = obj.name;
        newError.cause = obj.cause;
        return newError;
    }
    if (typeof File !== 'undefined' && obj instanceof File) {
        const newFile = new Constructor([obj], obj.name, { type: obj.type, lastModified: obj.lastModified });
        return newFile;
    }
    if (typeof obj === 'object') {
        const newObject = Object.create(prototype);
        return Object.assign(newObject, obj);
    }
    return obj;
}

function flattenObject(object) {
    return flattenObjectImpl(object);
}
function flattenObjectImpl(object, prefix = '') {
    const result = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = object[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        if (isPlainObject(value) && Object.keys(value).length > 0) {
            Object.assign(result, flattenObjectImpl(value, prefixedKey));
            continue;
        }
        if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
                result[`${prefixedKey}.${index}`] = value[index];
            }
            continue;
        }
        result[prefixedKey] = value;
    }
    return result;
}

function mapKeys(object, getNewKey) {
    const result = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = object[key];
        result[getNewKey(value, key, object)] = value;
    }
    return result;
}

function mapValues(object, getNewValue) {
    const result = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = object[key];
        result[key] = getNewValue(value, key, object);
    }
    return result;
}

function cloneDeep(obj) {
    return cloneDeepImpl(obj);
}
function cloneDeepImpl(obj, stack = new Map()) {
    if (isPrimitive(obj)) {
        return obj;
    }
    if (stack.has(obj)) {
        return stack.get(obj);
    }
    if (Array.isArray(obj)) {
        const result = new Array(obj.length);
        stack.set(obj, result);
        for (let i = 0; i < obj.length; i++) {
            result[i] = cloneDeepImpl(obj[i], stack);
        }
        if (Object.hasOwn(obj, 'index')) {
            result.index = obj.index;
        }
        if (Object.hasOwn(obj, 'input')) {
            result.input = obj.input;
        }
        return result;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof RegExp) {
        const result = new RegExp(obj.source, obj.flags);
        result.lastIndex = obj.lastIndex;
        return result;
    }
    if (obj instanceof Map) {
        const result = new Map();
        stack.set(obj, result);
        for (const [key, value] of obj.entries()) {
            result.set(key, cloneDeepImpl(value, stack));
        }
        return result;
    }
    if (obj instanceof Set) {
        const result = new Set();
        stack.set(obj, result);
        for (const value of obj.values()) {
            result.add(cloneDeepImpl(value, stack));
        }
        return result;
    }
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(obj)) {
        return obj.subarray();
    }
    if (isTypedArray(obj)) {
        const result = new (Object.getPrototypeOf(obj).constructor)(obj.length);
        stack.set(obj, result);
        for (let i = 0; i < obj.length; i++) {
            result[i] = cloneDeepImpl(obj[i], stack);
        }
        return result;
    }
    if (obj instanceof ArrayBuffer || (typeof SharedArrayBuffer !== 'undefined' && obj instanceof SharedArrayBuffer)) {
        return obj.slice(0);
    }
    if (obj instanceof DataView) {
        const result = new DataView(obj.buffer.slice(0), obj.byteOffset, obj.byteLength);
        stack.set(obj, result);
        copyProperties(result, obj, stack);
        return result;
    }
    if (typeof File !== 'undefined' && obj instanceof File) {
        const result = new File([obj], obj.name, { type: obj.type });
        stack.set(obj, result);
        copyProperties(result, obj, stack);
        return result;
    }
    if (obj instanceof Blob) {
        const result = new Blob([obj], { type: obj.type });
        stack.set(obj, result);
        copyProperties(result, obj, stack);
        return result;
    }
    if (obj instanceof Error) {
        const result = new obj.constructor();
        stack.set(obj, result);
        result.message = obj.message;
        result.name = obj.name;
        result.stack = obj.stack;
        result.cause = obj.cause;
        copyProperties(result, obj, stack);
        return result;
    }
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        stack.set(obj, result);
        copyProperties(result, obj, stack);
        return result;
    }
    return obj;
}
function copyProperties(target, source, stack) {
    const keys = Object.keys(source);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        if (descriptor?.writable || descriptor?.set) {
            target[key] = cloneDeepImpl(source[key], stack);
        }
    }
}

function merge(target, source) {
    const sourceKeys = Object.keys(source);
    for (let i = 0; i < sourceKeys.length; i++) {
        const key = sourceKeys[i];
        const sourceValue = source[key];
        const targetValue = target[key];
        if (Array.isArray(sourceValue)) {
            if (Array.isArray(targetValue)) {
                target[key] = merge(targetValue, sourceValue);
            }
            else {
                target[key] = merge([], sourceValue);
            }
        }
        else if (isPlainObject(sourceValue)) {
            if (isPlainObject(targetValue)) {
                target[key] = merge(targetValue, sourceValue);
            }
            else {
                target[key] = merge({}, sourceValue);
            }
        }
        else if (targetValue === undefined || sourceValue !== undefined) {
            target[key] = sourceValue;
        }
    }
    return target;
}

function toMerged(target, source) {
    return merge(cloneDeep(target), source);
}

function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}

export { mapValues as a, cloneDeep as b, clone as c, merge as d, copyProperties as e, flattenObject as f, isObjectLike as g, invert as i, mapKeys as m, omitBy as o, pickBy as p, toMerged as t };
