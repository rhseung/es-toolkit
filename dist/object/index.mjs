import { g as isObjectLike } from '../_chunk/toMerged-B6ji1S.mjs';
export { c as clone, b as cloneDeep, f as flattenObject, i as invert, m as mapKeys, a as mapValues, d as merge, o as omitBy, p as pickBy, t as toMerged } from '../_chunk/toMerged-B6ji1S.mjs';

function omit(obj, keys) {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}

function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}

function mergeWith(target, source, merge) {
    const sourceKeys = Object.keys(source);
    for (let i = 0; i < sourceKeys.length; i++) {
        const key = sourceKeys[i];
        const sourceValue = source[key];
        const targetValue = target[key];
        const merged = merge(targetValue, sourceValue, key, target, source);
        if (merged != null) {
            target[key] = merged;
        }
        else if (Array.isArray(sourceValue)) {
            target[key] = mergeWith(targetValue ?? [], sourceValue, merge);
        }
        else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
            target[key] = mergeWith(targetValue ?? {}, sourceValue, merge);
        }
        else if (targetValue === undefined || sourceValue !== undefined) {
            target[key] = sourceValue;
        }
    }
    return target;
}

export { mergeWith, omit, pick };
