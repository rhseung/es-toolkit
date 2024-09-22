export { c as clamp, i as inRange, m as mean, a as meanBy, r as range, s as sum, b as sumBy } from '../_chunk/range-DephJ-.mjs';
export { r as random, a as randomInt } from '../_chunk/randomInt-DrUn1V.mjs';

function round(value, precision = 0) {
    if (!Number.isInteger(precision)) {
        throw new Error('Precision must be an integer.');
    }
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}

export { round };
