import { a as randomInt } from './randomInt-DrUn1V.mjs';

function at(arr, indices) {
    const result = [];
    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        result[i] = arr.at(index);
    }
    return result;
}

function chunk(arr, size) {
    if (!Number.isInteger(size) || size <= 0) {
        throw new Error('Size must be an integer greater than zero.');
    }
    const chunkLength = Math.ceil(arr.length / size);
    const result = Array(chunkLength);
    for (let index = 0; index < chunkLength; index++) {
        const start = index * size;
        const end = start + size;
        result[index] = arr.slice(start, end);
    }
    return result;
}

function compact(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item) {
            result.push(item);
        }
    }
    return result;
}

function countBy(arr, mapper) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = mapper(item);
        result[key] = (result[key] ?? 0) + 1;
    }
    return result;
}

function difference(firstArr, secondArr) {
    const secondSet = new Set(secondArr);
    return firstArr.filter(item => !secondSet.has(item));
}

function differenceBy(firstArr, secondArr, mapper) {
    const mappedSecondSet = new Set(secondArr.map(item => mapper(item)));
    return firstArr.filter(item => {
        return !mappedSecondSet.has(mapper(item));
    });
}

function differenceWith(firstArr, secondArr, areItemsEqual) {
    return firstArr.filter(firstItem => {
        return secondArr.every(secondItem => {
            return !areItemsEqual(firstItem, secondItem);
        });
    });
}

function dropRight(arr, itemsCount) {
    itemsCount = Math.min(-itemsCount, 0);
    if (itemsCount === 0) {
        return arr.slice();
    }
    return arr.slice(0, itemsCount);
}

function dropRightWhile(arr, canContinueDropping) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!canContinueDropping(arr[i])) {
            return arr.slice(0, i + 1);
        }
    }
    return [];
}

function dropWhile(arr, canContinueDropping) {
    const dropEndIndex = arr.findIndex(item => !canContinueDropping(item));
    if (dropEndIndex === -1) {
        return [];
    }
    return arr.slice(dropEndIndex);
}

function fill(array, value, start = 0, end = array.length) {
    const length = array.length;
    const finalStart = Math.max(start >= 0 ? start : length + start, 0);
    const finalEnd = Math.min(end >= 0 ? end : length + end, length);
    for (let i = finalStart; i < finalEnd; i++) {
        array[i] = value;
    }
    return array;
}

function flatten(arr, depth = 1) {
    const result = [];
    const flooredDepth = Math.floor(depth);
    const recursive = (arr, currentDepth) => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (Array.isArray(item) && currentDepth < flooredDepth) {
                recursive(item, currentDepth + 1);
            }
            else {
                result.push(item);
            }
        }
    };
    recursive(arr, 0);
    return result;
}

function flatMap(arr, iteratee, depth = 1) {
    return flatten(arr.map(item => iteratee(item)), depth);
}

function flattenDeep(arr) {
    return flatten(arr, Infinity);
}

function flatMapDeep(arr, iteratee) {
    return flattenDeep(arr.map((item) => iteratee(item)));
}

function forEachRight(arr, callback) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        callback(element, i, arr);
    }
}

function groupBy(arr, getKeyFromItem) {
    const result = Object.create(null);
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = getKeyFromItem(item);
        if (result[key] == null) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

function head(arr) {
    return arr[0];
}

function initial(arr) {
    return arr.slice(0, -1);
}

function intersection(firstArr, secondArr) {
    const secondSet = new Set(secondArr);
    return firstArr.filter(item => {
        return secondSet.has(item);
    });
}

function intersectionBy(firstArr, secondArr, mapper) {
    const mappedSecondSet = new Set(secondArr.map(mapper));
    return firstArr.filter(item => mappedSecondSet.has(mapper(item)));
}

function intersectionWith(firstArr, secondArr, areItemsEqual) {
    return firstArr.filter(firstItem => {
        return secondArr.some(secondItem => {
            return areItemsEqual(firstItem, secondItem);
        });
    });
}

function isSubset(superset, subset) {
    return difference(subset, superset).length === 0;
}

function keyBy(arr, getKeyFromItem) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = getKeyFromItem(item);
        result[key] = item;
    }
    return result;
}

function last(arr) {
    return arr[arr.length - 1];
}

function maxBy(items, getValue) {
    let maxElement = items[0];
    let max = -Infinity;
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        const value = getValue(element);
        if (value > max) {
            max = value;
            maxElement = element;
        }
    }
    return maxElement;
}

function minBy(items, getValue) {
    let minElement = items[0];
    let min = Infinity;
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        const value = getValue(element);
        if (value < min) {
            min = value;
            minElement = element;
        }
    }
    return minElement;
}

function partition(arr, isInTruthy) {
    const truthy = [];
    const falsy = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (isInTruthy(item)) {
            truthy.push(item);
        }
        else {
            falsy.push(item);
        }
    }
    return [truthy, falsy];
}

function pullAt(arr, indicesToRemove) {
    const removed = at(arr, indicesToRemove);
    const indices = new Set(indicesToRemove.slice().sort((x, y) => y - x));
    for (const index of indices) {
        arr.splice(index, 1);
    }
    return removed;
}

function sample(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function sampleSize(array, size) {
    if (size > array.length) {
        throw new Error('Size must be less than or equal to the length of array.');
    }
    const result = new Array(size);
    const selected = new Set();
    for (let step = array.length - size, resultIndex = 0; step < array.length; step++, resultIndex++) {
        let index = randomInt(0, step + 1);
        if (selected.has(index)) {
            index = step;
        }
        selected.add(index);
        result[resultIndex] = array[index];
    }
    return result;
}

function shuffle(arr) {
    const result = arr.slice();
    for (let i = result.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function tail(arr) {
    return arr.slice(1);
}

function take(arr, count) {
    return arr.slice(0, count);
}

function takeRight(arr, count = 1) {
    if (count <= 0) {
        return [];
    }
    return arr.slice(-count);
}

function takeRightWhile(arr, shouldContinueTaking) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!shouldContinueTaking(arr[i])) {
            return arr.slice(i + 1);
        }
    }
    return arr.slice();
}

function takeWhile(arr, shouldContinueTaking) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!shouldContinueTaking(item)) {
            break;
        }
        result.push(item);
    }
    return result;
}

function toFilled(arr, value, start = 0, end = arr.length) {
    const length = arr.length;
    const finalStart = Math.max(start >= 0 ? start : length + start, 0);
    const finalEnd = Math.min(end >= 0 ? end : length + end, length);
    const newArr = arr.slice();
    for (let i = finalStart; i < finalEnd; i++) {
        newArr[i] = value;
    }
    return newArr;
}

function uniq(arr) {
    return Array.from(new Set(arr));
}

function union(arr1, arr2) {
    return uniq(arr1.concat(arr2));
}

function unionBy(arr1, arr2, mapper) {
    const map = new Map();
    const items = [...arr1, ...arr2];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const key = mapper(item);
        if (!map.has(key)) {
            map.set(key, item);
        }
    }
    return Array.from(map.values());
}

function uniqWith(arr, areItemsEqual) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const isUniq = result.every(v => !areItemsEqual(v, item));
        if (isUniq) {
            result.push(item);
        }
    }
    return result;
}

function unionWith(arr1, arr2, areItemsEqual) {
    return uniqWith(arr1.concat(arr2), areItemsEqual);
}

function uniqBy(arr, mapper) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = mapper(item);
        if (!map.has(key)) {
            map.set(key, item);
        }
    }
    return Array.from(map.values());
}

function unzip(zipped) {
    let maxLen = 0;
    for (let i = 0; i < zipped.length; i++) {
        if (zipped[i].length > maxLen) {
            maxLen = zipped[i].length;
        }
    }
    const result = new Array(maxLen);
    for (let i = 0; i < maxLen; i++) {
        result[i] = new Array(zipped.length);
        for (let j = 0; j < zipped.length; j++) {
            result[i][j] = zipped[j][i];
        }
    }
    return result;
}

function unzipWith(target, iteratee) {
    const maxLength = Math.max(...target.map(innerArray => innerArray.length));
    const result = new Array(maxLength);
    for (let i = 0; i < maxLength; i++) {
        const group = new Array(target.length);
        for (let j = 0; j < target.length; j++) {
            group[j] = target[j][i];
        }
        result[i] = iteratee(...group);
    }
    return result;
}

function without(array, ...values) {
    const valuesSet = new Set(values);
    return array.filter(item => !valuesSet.has(item));
}

function xor(arr1, arr2) {
    return difference(union(arr1, arr2), intersection(arr1, arr2));
}

function xorBy(arr1, arr2, mapper) {
    const union = unionBy(arr1, arr2, mapper);
    const intersection = intersectionBy(arr1, arr2, mapper);
    return differenceBy(union, intersection, mapper);
}

function xorWith(arr1, arr2, areElementsEqual) {
    const union = unionWith(arr1, arr2, areElementsEqual);
    const intersection = intersectionWith(arr1, arr2, areElementsEqual);
    return differenceWith(union, intersection, areElementsEqual);
}

function zip(...arrs) {
    const rowCount = Math.max(...arrs.map(x => x.length));
    const columnCount = arrs.length;
    const result = Array(rowCount);
    for (let i = 0; i < rowCount; ++i) {
        const row = Array(columnCount);
        for (let j = 0; j < columnCount; ++j) {
            row[j] = arrs[j][i];
        }
        result[i] = row;
    }
    return result;
}

function zipObject(keys, values) {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}

function zipWith(arr1, ...rest) {
    const arrs = [arr1, ...rest.slice(0, -1)];
    const combine = rest[rest.length - 1];
    const maxIndex = Math.max(...arrs.map(arr => arr.length));
    const result = Array(maxIndex);
    for (let i = 0; i < maxIndex; i++) {
        const elements = arrs.map(arr => arr[i]);
        result[i] = combine(...elements);
    }
    return result;
}

export { minBy as A, partition as B, pullAt as C, sample as D, sampleSize as E, shuffle as F, tail as G, take as H, takeRight as I, takeRightWhile as J, takeWhile as K, toFilled as L, union as M, unionBy as N, unionWith as O, uniq as P, uniqBy as Q, uniqWith as R, unzip as S, unzipWith as T, without as U, xor as V, xorBy as W, xorWith as X, zip as Y, zipObject as Z, zipWith as _, at as a, compact as b, chunk as c, countBy as d, difference as e, differenceBy as f, differenceWith as g, dropRight as h, dropRightWhile as i, dropWhile as j, fill as k, flatMap as l, flatMapDeep as m, flatten as n, flattenDeep as o, forEachRight as p, groupBy as q, head as r, initial as s, intersection as t, intersectionBy as u, intersectionWith as v, isSubset as w, keyBy as x, last as y, maxBy as z };
