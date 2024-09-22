import { c as chunk$1, n as flatten$1, e as difference$1, k as fill$1, Y as zip } from '../_chunk/zipWith--A-cU6.mjs';
export { a as at, b as compact, d as countBy, f as differenceBy, g as differenceWith, h as dropRight, i as dropRightWhile, j as dropWhile, r as first, l as flatMap, m as flatMapDeep, p as forEachRight, q as groupBy, r as head, s as initial, t as intersection, u as intersectionBy, v as intersectionWith, w as isSubset, x as keyBy, y as last, z as maxBy, A as minBy, B as partition, C as pullAt, D as sample, E as sampleSize, F as shuffle, G as tail, H as take, I as takeRight, J as takeRightWhile, K as takeWhile, L as toFilled, M as union, N as unionBy, O as unionWith, P as uniq, Q as uniqBy, R as uniqWith, S as unzip, T as unzipWith, U as without, V as xor, W as xorBy, X as xorWith, Z as zipObject, _ as zipWith } from '../_chunk/zipWith--A-cU6.mjs';
export { A as AbortError, T as TimeoutError, d as delay, t as timeout, w as withTimeout } from '../_chunk/index-BvxjF1.mjs';
import { e as ary$1, r as rest$1, d as debounce$1, n as noop } from '../_chunk/rest-BRaFmH.mjs';
export { a as after, b as before, m as memoize, c as negate, o as once, p as partial, f as partialRight, u as unary } from '../_chunk/rest-BRaFmH.mjs';
import { c as clamp$1, i as inRange$1 } from '../_chunk/range-DephJ-.mjs';
export { m as mean, a as meanBy, r as range, s as sum, b as sumBy } from '../_chunk/range-DephJ-.mjs';
import { r as random$1, a as randomInt } from '../_chunk/randomInt-DrUn1V.mjs';
import { b as cloneDeep$1, e as copyProperties, m as mapKeys$1, a as mapValues$1, c as clone, g as isObjectLike } from '../_chunk/toMerged-B6ji1S.mjs';
export { f as flattenObject, i as invert, o as omitBy, p as pickBy, t as toMerged } from '../_chunk/toMerged-B6ji1S.mjs';
import { b as isPrimitive, a as isTypedArray$1 } from '../_chunk/isPlainObject-CmlJbQ.mjs';
import { k as argumentsTag, l as booleanTag, s as stringTag, n as numberTag, m as getTag, b as isNil$1, o as getSymbols, f as isLength, h as isWeakMap$1, j as isWeakSet$1 } from '../_chunk/isWeakSet-CK0JLP.mjs';
export { i as isDate, a as isEqual, g as isFunction, c as isNotNil, d as isNull, e as isUndefined } from '../_chunk/isWeakSet-CK0JLP.mjs';
import { camelCase as camelCase$1, kebabCase as kebabCase$1, snakeCase as snakeCase$1, startCase as startCase$1, lowerCase as lowerCase$1, upperCase as upperCase$1, trim as trim$1, trimStart as trimStart$1, trimEnd as trimEnd$1 } from '../string/index.mjs';
export { capitalize, deburr, escape, escapeRegExp, lowerFirst, pad, pascalCase, unescape, upperFirst } from '../string/index.mjs';

function castArray(value) {
    if (arguments.length === 0) {
        return [];
    }
    return Array.isArray(value) ? value : [value];
}

function chunk(arr, size = 1) {
    size = Math.max(Math.floor(size), 0);
    if (size === 0) {
        return [];
    }
    return chunk$1(arr, size);
}

function concat(...values) {
    return flatten$1(values);
}

function difference(arr, ...values) {
    const arr1 = arr;
    const arr2 = flatten$1(values);
    return difference$1(arr1, arr2);
}

function drop(collection, itemsCount) {
    if (collection === null || collection === undefined) {
        return [];
    }
    itemsCount = Math.max(itemsCount, 0);
    return collection.slice(itemsCount);
}

function fill(array, value, start = 0, end = array.length) {
    start = Math.floor(start);
    end = Math.floor(end);
    if (!start) {
        start = 0;
    }
    if (!end) {
        end = 0;
    }
    return fill$1(array, value, start, end);
}

function isDeepKey(key) {
    switch (typeof key) {
        case 'number':
        case 'symbol': {
            return false;
        }
        case 'string': {
            return key.includes('.') || key.includes('[') || key.includes(']');
        }
    }
}

function toKey(value) {
    if (Object.is(value, -0)) {
        return '-0';
    }
    return value.toString();
}

const DOTS_KEY = /^[\w.]+$/g;
const ESCAPE_REGEXP = /\\(\\)?/g;
const PROPERTY_REGEXP = RegExp('[^.[\\]]+' +
    '|' +
    '\\[(?:' +
    '([^"\'][^[]*)' +
    '|' +
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
function toPath(deepKey) {
    if (DOTS_KEY.test(deepKey)) {
        return deepKey.split('.');
    }
    const result = [];
    if (deepKey[0] === '.') {
        result.push('');
    }
    const matches = deepKey.matchAll(PROPERTY_REGEXP);
    for (const match of matches) {
        let key = match[0];
        const expr = match[1];
        const quote = match[2];
        const substr = match[3];
        if (quote) {
            key = substr.replace(ESCAPE_REGEXP, '$1');
        }
        else if (expr) {
            key = expr;
        }
        result.push(key);
    }
    return result;
}

function get(object, path, defaultValue) {
    if (object == null) {
        return defaultValue;
    }
    switch (typeof path) {
        case 'string': {
            const result = object[path];
            if (result === undefined) {
                if (isDeepKey(path)) {
                    return get(object, toPath(path), defaultValue);
                }
                else {
                    return defaultValue;
                }
            }
            return result;
        }
        case 'number':
        case 'symbol': {
            if (typeof path === 'number') {
                path = toKey(path);
            }
            const result = object[path];
            if (result === undefined) {
                return defaultValue;
            }
            return result;
        }
        default: {
            if (Array.isArray(path)) {
                return getWithPath(object, path, defaultValue);
            }
            if (Object.is(path?.valueOf(), -0)) {
                path = '-0';
            }
            else {
                path = String(path);
            }
            const result = object[path];
            if (result === undefined) {
                return defaultValue;
            }
            return result;
        }
    }
}
function getWithPath(object, path, defaultValue) {
    if (path.length === 0) {
        return defaultValue;
    }
    let current = object;
    for (let index = 0; index < path.length; index++) {
        if (current == null) {
            return defaultValue;
        }
        current = current[path[index]];
    }
    if (current === undefined) {
        return defaultValue;
    }
    return current;
}

function property(path) {
    return function (object) {
        return get(object, path);
    };
}

function isMatch(target, source) {
    if (source === target) {
        return true;
    }
    switch (typeof source) {
        case 'object': {
            if (source == null) {
                return true;
            }
            const keys = Object.keys(source);
            if (target == null) {
                if (keys.length === 0) {
                    return true;
                }
                return false;
            }
            if (Array.isArray(source)) {
                return isArrayMatch(target, source);
            }
            if (source instanceof Map) {
                return isMapMatch(target, source);
            }
            if (source instanceof Set) {
                return isSetMatch(target, source);
            }
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (!isPrimitive(target) && !(key in target)) {
                    return false;
                }
                if (source[key] === undefined && target[key] !== undefined) {
                    return false;
                }
                if (!isMatch(target[key], source[key])) {
                    return false;
                }
            }
            return true;
        }
        case 'function': {
            if (Object.keys(source).length > 0) {
                return isMatch(target, { ...source });
            }
            return false;
        }
        default: {
            return !source;
        }
    }
}
function isMapMatch(target, source) {
    if (source.size === 0) {
        return true;
    }
    if (!(target instanceof Map)) {
        return false;
    }
    for (const [key, value] of source.entries()) {
        if (!isMatch(target.get(key), value)) {
            return false;
        }
    }
    return true;
}
function isArrayMatch(target, source) {
    if (source.length === 0) {
        return true;
    }
    if (!Array.isArray(target)) {
        return false;
    }
    const countedIndex = new Set();
    for (let i = 0; i < source.length; i++) {
        const sourceItem = source[i];
        const index = target.findIndex((targetItem, index) => {
            return isMatch(targetItem, sourceItem) && !countedIndex.has(index);
        });
        if (index === -1) {
            return false;
        }
        countedIndex.add(index);
    }
    return true;
}
function isSetMatch(target, source) {
    if (source.size === 0) {
        return true;
    }
    if (!(target instanceof Set)) {
        return false;
    }
    return isArrayMatch([...target], [...source]);
}

function matches(source) {
    source = cloneDeep$1(source);
    return (target) => {
        return isMatch(target, source);
    };
}

function cloneDeep(obj) {
    if (typeof obj !== 'object') {
        return cloneDeep$1(obj);
    }
    switch (Object.prototype.toString.call(obj)) {
        case numberTag:
        case stringTag:
        case booleanTag: {
            const result = new obj.constructor(obj?.valueOf());
            copyProperties(result, obj);
            return result;
        }
        case argumentsTag: {
            const result = {};
            copyProperties(result, obj);
            result.length = obj.length;
            result[Symbol.iterator] = obj[Symbol.iterator];
            return result;
        }
        default: {
            return cloneDeep$1(obj);
        }
    }
}

const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value) {
    switch (typeof value) {
        case 'number': {
            return Number.isInteger(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER;
        }
        case 'symbol': {
            return false;
        }
        case 'string': {
            return IS_UNSIGNED_INTEGER.test(value);
        }
    }
}

function isArguments(value) {
    return value !== null && typeof value === 'object' && getTag(value) === '[object Arguments]';
}

function has(object, path) {
    let resolvedPath;
    if (Array.isArray(path)) {
        resolvedPath = path;
    }
    else if (typeof path === 'string' && isDeepKey(path) && object?.[path] == null) {
        resolvedPath = toPath(path);
    }
    else {
        resolvedPath = [path];
    }
    if (resolvedPath.length === 0) {
        return false;
    }
    let current = object;
    for (let i = 0; i < resolvedPath.length; i++) {
        const key = resolvedPath[i];
        if (current == null || !Object.prototype.hasOwnProperty.call(current, key)) {
            const isSparseIndex = (Array.isArray(current) || isArguments(current)) && isIndex(key) && key < current.length;
            if (!isSparseIndex) {
                return false;
            }
        }
        current = current[key];
    }
    return true;
}

function matchesProperty(property, source) {
    switch (typeof property) {
        case 'object': {
            if (Object.is(property?.valueOf(), -0)) {
                property = '-0';
            }
            break;
        }
        case 'number': {
            property = toKey(property);
            break;
        }
    }
    source = cloneDeep(source);
    return function (target) {
        const result = get(target, property);
        if (result === undefined) {
            return has(target, property);
        }
        if (source === undefined) {
            return result === undefined;
        }
        return isMatch(result, source);
    };
}

function find(source, doesMatch) {
    let values = source;
    if (!Array.isArray(source)) {
        values = Object.values(source);
    }
    switch (typeof doesMatch) {
        case 'function': {
            if (!Array.isArray(source)) {
                const entries = Object.entries(source);
                for (let i = 0; i < entries.length; i++) {
                    const entry = entries[i];
                    const key = entry[0];
                    const value = entry[1];
                    if (doesMatch(value, key, source)) {
                        return value;
                    }
                }
                return undefined;
            }
            return values.find(doesMatch);
        }
        case 'object': {
            if (Array.isArray(doesMatch) && doesMatch.length === 2) {
                const key = doesMatch[0];
                const value = doesMatch[1];
                return values.find(matchesProperty(key, value));
            }
            else {
                return values.find(matches(doesMatch));
            }
        }
        case 'string': {
            return values.find(property(doesMatch));
        }
    }
}

function findIndex(source, doesMatch) {
    switch (typeof doesMatch) {
        case 'function': {
            return source.findIndex(doesMatch);
        }
        case 'object': {
            if (Array.isArray(doesMatch) && doesMatch.length === 2) {
                const key = doesMatch[0];
                const value = doesMatch[1];
                return source.findIndex(matchesProperty(key, value));
            }
            else {
                return source.findIndex(matches(doesMatch));
            }
        }
        case 'string': {
            return source.findIndex(property(doesMatch));
        }
    }
}

function findLastIndex(arr, doesMatch, fromIndex = arr.length - 1) {
    if (fromIndex < 0) {
        fromIndex = Math.max(arr.length + fromIndex, 0);
    }
    else {
        fromIndex = Math.min(fromIndex, arr.length - 1);
    }
    arr = arr.slice(0, fromIndex + 1);
    switch (typeof doesMatch) {
        case 'function': {
            return arr.findLastIndex(doesMatch);
        }
        case 'object': {
            if (Array.isArray(doesMatch) && doesMatch.length === 2) {
                const key = doesMatch[0];
                const value = doesMatch[1];
                return arr.findLastIndex(matchesProperty(key, value));
            }
            else {
                return arr.findLastIndex(matches(doesMatch));
            }
        }
        case 'string': {
            return arr.findLastIndex(property(doesMatch));
        }
    }
}

function flatten(value, depth = 1) {
    const result = [];
    const flooredDepth = Math.floor(depth);
    if (!Array.isArray(value)) {
        return result;
    }
    const recursive = (arr, currentDepth) => {
        for (const item of arr) {
            if (currentDepth < flooredDepth &&
                (Array.isArray(item) ||
                    Boolean(item?.[Symbol.isConcatSpreadable]) ||
                    (item !== null && typeof item === 'object' && Object.prototype.toString.call(item) === '[object Arguments]'))) {
                if (Array.isArray(item)) {
                    recursive(item, currentDepth + 1);
                }
                else {
                    recursive(Array.from(item), currentDepth + 1);
                }
            }
            else {
                result.push(item);
            }
        }
    };
    recursive(value, 0);
    return result;
}

function flattenDeep(value) {
    return flatten(value, Infinity);
}

function flattenDepth(value, depth = 1) {
    return flatten(value, depth);
}

function indexOf(array, searchElement, fromIndex) {
    if (array == null) {
        return -1;
    }
    if (Number.isNaN(searchElement)) {
        fromIndex = fromIndex ?? 0;
        if (fromIndex < 0) {
            fromIndex = Math.max(0, array.length + fromIndex);
        }
        for (let i = fromIndex; i < array.length; i++) {
            if (Number.isNaN(array[i])) {
                return i;
            }
        }
        return -1;
    }
    return array.indexOf(searchElement, fromIndex);
}

function join(array, separator = ',') {
    return array.join(separator);
}

function getPriority(a) {
    if (typeof a === 'symbol') {
        return 1;
    }
    if (a === null) {
        return 2;
    }
    if (a === undefined) {
        return 3;
    }
    if (a !== a) {
        return 4;
    }
    return 0;
}
const compareValues = (a, b, order) => {
    if (a !== b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return order === 'desc' ? b.localeCompare(a) : a.localeCompare(b);
        }
        const aPriority = getPriority(a);
        const bPriority = getPriority(b);
        if (aPriority === bPriority && aPriority === 0) {
            if (a < b) {
                return order === 'desc' ? 1 : -1;
            }
            if (a > b) {
                return order === 'desc' ? -1 : 1;
            }
        }
        return order === 'desc' ? bPriority - aPriority : aPriority - bPriority;
    }
    return 0;
};

function isSymbol(value) {
    return typeof value === 'symbol' || (value != null && value instanceof Symbol);
}

const regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
    if (Array.isArray(value)) {
        return false;
    }
    if (typeof value === 'number' || typeof value === 'boolean' || value == null || isSymbol(value)) {
        return true;
    }
    return ((typeof value === 'string' && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value))) ||
        (object != null));
}

function orderBy(collection, criteria, orders) {
    if (collection == null || typeof collection === 'number') {
        return [];
    }
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        collection = Object.values(collection);
    }
    if (!Array.isArray(criteria)) {
        criteria = criteria == null ? [null] : [criteria];
    }
    if (!Array.isArray(orders)) {
        orders = orders == null ? [] : [orders];
    }
    orders = orders.map(order => String(order));
    const getValueByNestedPath = (object, path) => {
        let target = object;
        for (let i = 0; i < path.length && target != null; ++i) {
            target = target[path[i]];
        }
        return target;
    };
    const getValueByCriterion = (criterion, object) => {
        if (object == null || criterion == null) {
            return object;
        }
        if (typeof criterion === 'object' && 'key' in criterion) {
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
        if (typeof object === 'object') {
            return object[criterion];
        }
        return object;
    };
    const preparedCriteria = criteria.map(criterion => {
        if (Array.isArray(criterion) && criterion.length === 1) {
            criterion = criterion[0];
        }
        if (criterion == null || typeof criterion === 'function' || Array.isArray(criterion) || isKey(criterion)) {
            return criterion;
        }
        return { key: criterion, path: toPath(criterion) };
    });
    const preparedCollection = collection.map(item => ({
        original: item,
        criteria: preparedCriteria.map(criterion => getValueByCriterion(criterion, item)),
    }));
    return preparedCollection
        .slice()
        .sort((a, b) => {
        for (let i = 0; i < preparedCriteria.length; i++) {
            const comparedResult = compareValues(a.criteria[i], b.criteria[i], orders[i]);
            if (comparedResult !== 0) {
                return comparedResult;
            }
        }
        return 0;
    })
        .map(item => item.original);
}

function sortBy(collection, criteria) {
    return orderBy(collection, criteria, ['asc']);
}

function size(target) {
    if (isNil$1(target)) {
        return 0;
    }
    if (target instanceof Map || target instanceof Set) {
        return target.size;
    }
    return Object.keys(target).length;
}

function identity(x) {
    return x;
}

function some(arr, predicate, guard) {
    if (guard != null) {
        predicate = undefined;
    }
    if (!predicate) {
        predicate = identity;
    }
    if (!Array.isArray(arr)) {
        return false;
    }
    switch (typeof predicate) {
        case 'function': {
            return arr.some(predicate);
        }
        case 'object': {
            if (Array.isArray(predicate) && predicate.length === 2) {
                const key = predicate[0];
                const value = predicate[1];
                return arr.some(matchesProperty(key, value));
            }
            else {
                return arr.some(matches(predicate));
            }
        }
        case 'string': {
            return arr.some(property(predicate));
        }
    }
}

function set(obj, path, value) {
    const resolvedPath = Array.isArray(path) ? path : typeof path === 'string' ? toPath(path) : [path];
    let current = obj;
    for (let i = 0; i < resolvedPath.length - 1; i++) {
        const key = resolvedPath[i];
        const nextKey = resolvedPath[i + 1];
        if (current[key] == null) {
            current[key] = isIndex(nextKey) ? [] : {};
        }
        current = current[key];
    }
    const lastKey = resolvedPath[resolvedPath.length - 1];
    current[lastKey] = value;
    return obj;
}

function zipObjectDeep(keys, values) {
    const result = {};
    const zipped = zip(keys, values);
    for (let i = 0; i < zipped.length; i++) {
        const [key, value] = zipped[i];
        if (key != null) {
            set(result, key, value);
        }
    }
    return result;
}

function ary(func, n = func.length, guard) {
    if (guard) {
        n = func.length;
    }
    if (Number.isNaN(n) || n < 0) {
        n = 0;
    }
    return ary$1(func, n);
}

function bind(func, thisObj, ...partialArgs) {
    const bound = function (...providedArgs) {
        const args = [];
        let startIndex = 0;
        for (let i = 0; i < partialArgs.length; i++) {
            const arg = partialArgs[i];
            if (arg === bind.placeholder) {
                args.push(providedArgs[startIndex++]);
            }
            else {
                args.push(arg);
            }
        }
        for (let i = startIndex; i < providedArgs.length; i++) {
            args.push(providedArgs[i]);
        }
        if (this instanceof bound) {
            return new func(...args);
        }
        return func.apply(thisObj, args);
    };
    return bound;
}
const bindPlaceholder = Symbol('bind.placeholder');
bind.placeholder = bindPlaceholder;

function bindKey(object, key, ...partialArgs) {
    const bound = function (...providedArgs) {
        const args = [];
        let startIndex = 0;
        for (let i = 0; i < partialArgs.length; i++) {
            const arg = partialArgs[i];
            if (arg === bindKey.placeholder) {
                args.push(providedArgs[startIndex++]);
            }
            else {
                args.push(arg);
            }
        }
        for (let i = startIndex; i < providedArgs.length; i++) {
            args.push(providedArgs[i]);
        }
        if (this instanceof bound) {
            return new object[key](...args);
        }
        return object[key].apply(object, args);
    };
    return bound;
}
const bindKeyPlaceholder = Symbol('bindKey.placeholder');
bindKey.placeholder = bindKeyPlaceholder;

function rest(func, start = func.length - 1) {
    start = Number.parseInt(start, 10);
    if (Number.isNaN(start) || start < 0) {
        start = func.length - 1;
    }
    return rest$1(func, start);
}

function spread(func, argsIndex = 0) {
    argsIndex = Number.parseInt(argsIndex, 10);
    if (Number.isNaN(argsIndex) || argsIndex < 0) {
        argsIndex = 0;
    }
    return function (...args) {
        const array = args[argsIndex];
        const params = args.slice(0, argsIndex);
        if (array) {
            params.push(...array);
        }
        return func.apply(this, params);
    };
}

function attempt(func, ...args) {
    try {
        return func(...args);
    }
    catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
}

function rearg(func, ...indices) {
    const flattenIndices = flatten(indices);
    return function (...args) {
        const reorderedArgs = flattenIndices.map(i => args[i]).slice(0, args.length);
        for (let i = reorderedArgs.length; i < args.length; i++) {
            reorderedArgs.push(args[i]);
        }
        return func.apply(this, reorderedArgs);
    };
}

function curry(func, arity = func.length, guard) {
    arity = guard ? func.length : arity;
    arity = Number.parseInt(arity, 10);
    if (Number.isNaN(arity) || arity < 1) {
        arity = 0;
    }
    const wrapper = function (...partials) {
        const holders = replaceHolders(partials);
        const length = partials.length - holders.length;
        if (length < arity) {
            return makeCurry(func, holders, arity - length, partials);
        }
        if (this instanceof wrapper) {
            return new func(...partials);
        }
        return func.apply(this, partials);
    };
    wrapper.placeholder = curryPlaceholder;
    return wrapper;
}
function makeCurry(func, holders, arity, partials) {
    function wrapper(...args) {
        const holdersCount = args.filter(item => item === curry.placeholder).length;
        const length = args.length - holdersCount;
        args = composeArgs(args, partials, holders);
        if (length < arity) {
            const newHolders = replaceHolders(args);
            return makeCurry(func, newHolders, arity - length, args);
        }
        if (this instanceof wrapper) {
            return new func(...args);
        }
        return func.apply(this, args);
    }
    wrapper.placeholder = curryPlaceholder;
    return wrapper;
}
function replaceHolders(args) {
    const result = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] === curry.placeholder) {
            result.push(i);
        }
    }
    return result;
}
function composeArgs(args, partials, holders) {
    const result = [...partials];
    const argsLength = args.length;
    const holdersLength = holders.length;
    let argsIndex = -1, leftIndex = partials.length, rangeLength = Math.max(argsLength - holdersLength, 0);
    while (++argsIndex < holdersLength) {
        if (argsIndex < argsLength) {
            result[holders[argsIndex]] = args[argsIndex];
        }
    }
    while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
    }
    return result;
}
const curryPlaceholder = Symbol('curry.placeholder');
curry.placeholder = curryPlaceholder;

function debounce(func, debounceMs = 0, options = {}) {
    if (typeof options !== 'object') {
        options = {};
    }
    const { signal, leading = false, trailing = true, maxWait } = options;
    const edges = Array(2);
    if (leading) {
        edges[0] = 'leading';
    }
    if (trailing) {
        edges[1] = 'trailing';
    }
    let result = undefined;
    let pendingAt = null;
    const _debounced = debounce$1(function (...args) {
        result = func.apply(this, args);
        pendingAt = null;
    }, debounceMs, { signal, edges });
    const debounced = function (...args) {
        if (maxWait != null) {
            if (pendingAt === null) {
                pendingAt = Date.now();
            }
            else {
                if (Date.now() - pendingAt >= maxWait) {
                    result = func.apply(this, args);
                    pendingAt = Date.now();
                    _debounced.cancel();
                    _debounced.schedule();
                    return result;
                }
            }
        }
        _debounced.apply(this, args);
        return result;
    };
    const flush = () => {
        _debounced.flush();
        return result;
    };
    debounced.cancel = _debounced.cancel;
    debounced.flush = flush;
    return debounced;
}

function throttle(func, throttleMs = 0, options = {}) {
    if (typeof options !== 'object') {
        options = {};
    }
    const { leading = true, trailing = true, signal } = options;
    return debounce(func, throttleMs, { leading, trailing, signal, maxWait: throttleMs });
}

function isNil(x) {
    return x == null;
}

function pick(obj, ...keysArr) {
    if (isNil(obj)) {
        return {};
    }
    const result = {};
    for (let keys of keysArr) {
        switch (typeof keys) {
            case 'object': {
                if (!Array.isArray(keys)) {
                    keys = Array.from(keys);
                }
                break;
            }
            case 'string':
            case 'symbol':
            case 'number': {
                keys = [keys];
                break;
            }
        }
        for (const key of keys) {
            const value = get(obj, key);
            if (typeof key === 'string' && Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = value;
            }
            else {
                set(result, key, value);
            }
        }
    }
    return result;
}

function unset(obj, path) {
    if (obj == null) {
        return true;
    }
    switch (typeof path) {
        case 'symbol':
        case 'number':
        case 'object': {
            if (Array.isArray(path)) {
                return unsetWithPath(obj, path);
            }
            if (typeof path === 'number') {
                path = toKey(path);
            }
            else if (typeof path === 'object') {
                if (Object.is(path?.valueOf(), -0)) {
                    path = '-0';
                }
                else {
                    path = String(path);
                }
            }
            if (obj?.[path] === undefined) {
                return true;
            }
            try {
                delete obj[path];
                return true;
            }
            catch {
                return false;
            }
        }
        case 'string': {
            if (obj?.[path] === undefined && isDeepKey(path)) {
                return unsetWithPath(obj, toPath(path));
            }
            try {
                delete obj[path];
                return true;
            }
            catch {
                return false;
            }
        }
    }
}
function unsetWithPath(obj, path) {
    const parent = get(obj, path.slice(0, -1), obj);
    const lastKey = path[path.length - 1];
    if (parent?.[lastKey] === undefined) {
        return true;
    }
    try {
        delete parent[lastKey];
        return true;
    }
    catch {
        return false;
    }
}

function omit(obj, ...keysArr) {
    if (obj == null) {
        return {};
    }
    const result = cloneDeep$1(obj);
    for (let i = 0; i < keysArr.length; i++) {
        let keys = keysArr[i];
        switch (typeof keys) {
            case 'object': {
                if (!Array.isArray(keys)) {
                    keys = Array.from(keys);
                }
                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    unset(result, key);
                }
                break;
            }
            case 'string':
            case 'symbol':
            case 'number': {
                unset(result, keys);
                break;
            }
        }
    }
    return result;
}

function mapKeys(object, getNewKey) {
    getNewKey = getNewKey ?? identity;
    switch (typeof getNewKey) {
        case 'string':
        case 'symbol':
        case 'number':
        case 'object': {
            return mapKeys$1(object, property(getNewKey));
        }
        case 'function': {
            return mapKeys$1(object, getNewKey);
        }
    }
}

function mapValues(object, getNewValue) {
    getNewValue = getNewValue ?? identity;
    switch (typeof getNewValue) {
        case 'string':
        case 'symbol':
        case 'number':
        case 'object': {
            return mapValues$1(object, property(getNewValue));
        }
        case 'function': {
            return mapValues$1(object, getNewValue);
        }
    }
}

function isPlainObject(object) {
    if (typeof object !== 'object') {
        return false;
    }
    if (object == null) {
        return false;
    }
    if (Object.getPrototypeOf(object) === null) {
        return true;
    }
    if (Object.prototype.toString.call(object) !== '[object Object]') {
        const tag = object[Symbol.toStringTag];
        if (tag == null) {
            return false;
        }
        const isTagReadonly = !Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)?.writable;
        if (isTagReadonly) {
            return false;
        }
        return object.toString() === `[object ${tag}]`;
    }
    let proto = object;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(object) === proto;
}

function isTypedArray(x) {
    return isTypedArray$1(x);
}

function mergeWith(object, ...otherArgs) {
    const sources = otherArgs.slice(0, -1);
    const merge = otherArgs[otherArgs.length - 1];
    let result = object;
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        result = mergeWithDeep(object, source, merge, new Map());
    }
    return result;
}
function mergeWithDeep(target, source, merge, stack) {
    if (source == null || typeof source !== 'object') {
        return target;
    }
    if (stack.has(source)) {
        return clone(stack.get(source));
    }
    stack.set(source, target);
    if (Array.isArray(source)) {
        source = source.slice();
        for (let i = 0; i < source.length; i++) {
            source[i] = source[i] ?? undefined;
        }
    }
    const sourceKeys = [...Object.keys(source), ...getSymbols(source)];
    for (let i = 0; i < sourceKeys.length; i++) {
        const key = sourceKeys[i];
        let sourceValue = source[key];
        let targetValue = target[key];
        if (isArguments(sourceValue)) {
            sourceValue = { ...sourceValue };
        }
        if (isArguments(targetValue)) {
            targetValue = { ...targetValue };
        }
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(sourceValue)) {
            sourceValue = cloneDeep(sourceValue);
        }
        if (Array.isArray(sourceValue)) {
            if (typeof targetValue === 'object') {
                const cloned = [];
                const targetKeys = Reflect.ownKeys(targetValue);
                for (let i = 0; i < targetKeys.length; i++) {
                    const targetKey = targetKeys[i];
                    cloned[targetKey] = targetValue[targetKey];
                }
                targetValue = cloned;
            }
            else {
                targetValue = [];
            }
        }
        const merged = merge(targetValue, sourceValue, key, target, source, stack);
        if (merged != null) {
            target[key] = merged;
        }
        else if (Array.isArray(sourceValue)) {
            target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
        }
        else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
            target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
        }
        else if (targetValue == null && isPlainObject(sourceValue)) {
            target[key] = mergeWithDeep({}, sourceValue, merge, stack);
        }
        else if (targetValue == null && isTypedArray(sourceValue)) {
            target[key] = cloneDeep(sourceValue);
        }
        else if (targetValue === undefined || sourceValue !== undefined) {
            target[key] = sourceValue;
        }
    }
    return target;
}

function merge(object, ...sources) {
    return mergeWith(object, ...sources, noop);
}

function isArrayLike(value) {
    return value != null && typeof value !== 'function' && isLength(value.length);
}

function fromPairs(pairs) {
    if (!isArrayLike(pairs) && !(pairs instanceof Map)) {
        return {};
    }
    const result = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    return value !== null && (typeof value === 'object' || typeof value === 'function');
}

function isBoolean(x) {
    if (x === true || x === false) {
        return true;
    }
    if (typeof x === 'object' && x != null && getTag(x) === '[object Boolean]') {
        return true;
    }
    return false;
}

function isRegExp(value) {
    return getTag(value) === '[object RegExp]';
}

function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
    if (typeof value === 'object' && value != null && getTag(value) === '[object String]') {
        return true;
    }
    return false;
}

function isWeakMap(value) {
    return isWeakMap$1(value);
}

function isWeakSet(value) {
    return isWeakSet$1(value);
}

function conformsTo(target, source) {
    if (source == null) {
        return true;
    }
    if (target == null) {
        return Object.keys(source).length === 0;
    }
    for (const key of Object.keys(source)) {
        const predicate = source[key];
        const value = target[key];
        if ((value === undefined && !(key in target)) || !predicate(value)) {
            return false;
        }
    }
    return true;
}

function conforms(source) {
    source = cloneDeep$1(source);
    return function (object) {
        return conformsTo(object, source);
    };
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isSafeInteger(value) {
    return Number.isSafeInteger(value);
}

function isNumber(value) {
    if (typeof value === 'object' && value != null && getTag(value) === '[object Number]') {
        return true;
    }
    return typeof value === 'number';
}

function isNaN(value) {
    return Number.isNaN(value);
}

function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}

function toString(value) {
    if (value == null) {
        return '';
    }
    if (Array.isArray(value)) {
        return value.map(toString).join(',');
    }
    const result = String(value);
    if (result === '0' && Object.is(Number(value), -0)) {
        return '-0';
    }
    return result;
}

function normalizeForCase(str) {
    if (typeof str !== 'string') {
        str = toString(str);
    }
    return str.replace(/['\u2019]/g, '');
}

function camelCase(str) {
    return camelCase$1(normalizeForCase(str));
}

function kebabCase(str) {
    return kebabCase$1(normalizeForCase(str));
}

function snakeCase(str) {
    return snakeCase$1(normalizeForCase(str));
}

function startCase(str) {
    return startCase$1(normalizeForCase(str));
}

function lowerCase(str) {
    return lowerCase$1(normalizeForCase(str));
}

function upperCase(str) {
    return upperCase$1(normalizeForCase(str));
}

function startsWith(str, target, position = 0) {
    return str.startsWith(target, position);
}

function endsWith(str, target, position = str.length) {
    return str.endsWith(target, position);
}

function padStart(str, length = 0, chars = ' ') {
    return str.padStart(length, chars);
}

function padEnd(str, length = 0, chars = ' ') {
    return str.padEnd(length, chars);
}

function repeat(str, n) {
    return str.repeat(n);
}

function trim(str, chars, guard) {
    if (str == null) {
        return '';
    }
    if (guard != null || chars == null) {
        return str.toString().trim();
    }
    switch (typeof chars) {
        case 'string': {
            return trim$1(str, chars.toString().split(''));
        }
        case 'object': {
            if (Array.isArray(chars)) {
                return trim$1(str, chars.map(x => x.toString()));
            }
            else {
                return trim$1(str, chars.toString().split(''));
            }
        }
    }
}

function trimStart(str, chars, guard) {
    if (str == null) {
        return '';
    }
    if (guard != null || chars == null) {
        return str.toString().trimStart();
    }
    switch (typeof chars) {
        case 'string': {
            return trimStart$1(str, chars.toString().split(''));
        }
        case 'object': {
            if (Array.isArray(chars)) {
                return trimStart$1(str, chars.map(x => x.toString()));
            }
            else {
                return trimStart$1(str, chars.toString().split(''));
            }
        }
    }
}

function trimEnd(str, chars, guard) {
    if (str == null) {
        return '';
    }
    if (guard != null || chars == null) {
        return str.toString().trimEnd();
    }
    switch (typeof chars) {
        case 'string': {
            return trimEnd$1(str, chars.toString().split(''));
        }
        case 'object': {
            if (Array.isArray(chars)) {
                return trimEnd$1(str, chars.map(x => x.toString()));
            }
            else {
                return trimEnd$1(str, chars.toString().split(''));
            }
        }
    }
}

function clamp(value, bound1, bound2) {
    if (Number.isNaN(bound1)) {
        bound1 = 0;
    }
    if (Number.isNaN(bound2)) {
        bound2 = 0;
    }
    return clamp$1(value, bound1, bound2);
}

function max(items = []) {
    let maxElement = items[0];
    let max = undefined;
    for (const element of items) {
        if (max == null || element > max) {
            max = element;
            maxElement = element;
        }
    }
    return maxElement;
}

function min(items = []) {
    let minElement = items[0];
    let min = undefined;
    for (const element of items) {
        if (min == null || element < min) {
            min = element;
            minElement = element;
        }
    }
    return minElement;
}

function decimalAdjust(type, number, precision = 0) {
    number = Number(number);
    if (Object.is(number, -0)) {
        number = '-0';
    }
    precision = Math.min(Number.parseInt(precision, 10), 292);
    if (precision) {
        const [magnitude, exponent = 0] = number.toString().split('e');
        let adjustedValue = Math[type](Number(`${magnitude}e${Number(exponent) + precision}`));
        if (Object.is(adjustedValue, -0)) {
            adjustedValue = '-0';
        }
        const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e');
        return Number(`${newMagnitude}e${Number(newExponent) - precision}`);
    }
    return Math[type](Number(number));
}

function ceil(number, precision = 0) {
    return decimalAdjust('ceil', number, precision);
}

function floor(number, precision = 0) {
    return decimalAdjust('floor', number, precision);
}

function round(number, precision = 0) {
    return decimalAdjust('round', number, precision);
}

function parseInt(string, radix = 0, guard) {
    if (guard) {
        radix = 0;
    }
    return Number.parseInt(string, radix);
}

function inRange(value, minimum, maximum) {
    if (!minimum) {
        minimum = 0;
    }
    if (maximum != null && !maximum) {
        maximum = 0;
    }
    if (minimum != null && typeof minimum !== 'number') {
        minimum = Number(minimum);
    }
    if (maximum == null && minimum === 0) {
        return false;
    }
    if (maximum != null && typeof maximum !== 'number') {
        maximum = Number(maximum);
    }
    if (maximum != null && minimum > maximum) {
        [minimum, maximum] = [maximum, minimum];
    }
    if (minimum === maximum) {
        return false;
    }
    return inRange$1(value, minimum, maximum);
}

function random(...args) {
    let minimum = 0;
    let maximum = 1;
    let floating = false;
    switch (args.length) {
        case 1: {
            if (typeof args[0] === 'boolean') {
                floating = args[0];
            }
            else {
                maximum = args[0];
            }
            break;
        }
        case 2: {
            if (typeof args[1] === 'boolean') {
                maximum = args[0];
                floating = args[1];
            }
            else {
                minimum = args[0];
                maximum = args[1];
            }
        }
        case 3: {
            if (typeof args[2] === 'object' && args[2] != null && args[2][args[1]] === args[0]) {
                minimum = 0;
                maximum = args[0];
                floating = false;
            }
            else {
                minimum = args[0];
                maximum = args[1];
                floating = args[2];
            }
        }
    }
    if (typeof minimum !== 'number') {
        minimum = Number(minimum);
    }
    if (typeof maximum !== 'number') {
        minimum = Number(maximum);
    }
    if (!minimum) {
        minimum = 0;
    }
    if (!maximum) {
        maximum = 0;
    }
    if (minimum > maximum) {
        [minimum, maximum] = [maximum, minimum];
    }
    minimum = clamp(minimum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    maximum = clamp(maximum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    if (minimum === maximum) {
        return minimum;
    }
    if (floating) {
        return random$1(minimum, maximum + 1);
    }
    else {
        return randomInt(minimum, maximum + 1);
    }
}

export { ary, attempt, bind, bindKey, camelCase, castArray, ceil, chunk, clamp, clone, cloneDeep, concat, conforms, conformsTo, curry, debounce, difference, drop, endsWith, fill, find, findIndex, findLastIndex, flatten, flattenDeep, flattenDepth, floor, fromPairs, get, has, inRange, indexOf, isArguments, isArray, isArrayLike, isArrayLikeObject, isBoolean, isInteger, isLength, isMatch, isNaN, isNil, isNumber, isObject, isObjectLike, isPlainObject, isPrimitive, isRegExp, isSafeInteger, isString, isSymbol, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, lowerCase, mapKeys, mapValues, matches, matchesProperty, max, merge, mergeWith, min, noop, omit, orderBy, padEnd, padStart, parseInt, pick, property, random, randomInt, rearg, repeat, rest, round, set, size, snakeCase, some, sortBy, spread, startCase, startsWith, throttle, toPath, toString, trim, trimEnd, trimStart, unset, upperCase, zip, zipObjectDeep };
