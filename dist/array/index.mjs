export { a as at, c as chunk, b as compact, d as countBy, e as difference, f as differenceBy, g as differenceWith, h as dropRight, i as dropRightWhile, j as dropWhile, k as fill, l as flatMap, m as flatMapDeep, n as flatten, o as flattenDeep, p as forEachRight, q as groupBy, r as head, s as initial, t as intersection, u as intersectionBy, v as intersectionWith, w as isSubset, x as keyBy, y as last, z as maxBy, A as minBy, B as partition, C as pullAt, D as sample, E as sampleSize, F as shuffle, G as tail, H as take, I as takeRight, J as takeRightWhile, K as takeWhile, L as toFilled, M as union, N as unionBy, O as unionWith, P as uniq, Q as uniqBy, R as uniqWith, S as unzip, T as unzipWith, U as without, V as xor, W as xorBy, X as xorWith, Y as zip, Z as zipObject, _ as zipWith } from '../_chunk/zipWith--A-cU6.mjs';

function drop(arr, itemsCount) {
    itemsCount = Math.max(itemsCount, 0);
    return arr.slice(itemsCount);
}

function compareValues(a, b, order) {
    if (a < b) {
        return order === 'asc' ? -1 : 1;
    }
    if (a > b) {
        return order === 'asc' ? 1 : -1;
    }
    return 0;
}

function orderBy(arr, criteria, orders) {
    return arr.slice().sort((a, b) => {
        const ordersLength = orders.length;
        for (let i = 0; i < criteria.length; i++) {
            const order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
            const criterion = criteria[i];
            const criterionIsFunction = typeof criterion === 'function';
            const valueA = criterionIsFunction ? criterion(a) : a[criterion];
            const valueB = criterionIsFunction ? criterion(b) : b[criterion];
            const result = compareValues(valueA, valueB, order);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });
}

function sortBy(arr, criteria) {
    return orderBy(arr, criteria, ['asc']);
}

export { drop, orderBy, sortBy };
