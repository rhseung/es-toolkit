/**
 * Returns an array of numbers from `start` to `end`, incrementing by `step`.
 *
 * If `step` is not provided, it defaults to `1`.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} [end] - The end number of the range (exclusive).
 * @param {number} [step] - The step value for the range. (default: 1)
 * @returns {number[]} An array of numbers from `start` to `end` with the specified `step`.
 *
 * @example
 * // Returns [0, 1, 2, 3]
 * range(4);
 *
 * @example
 * // Returns [0, 5, 10, 15]
 * range(0, 20, 5);
 *
 * @example
 * // Returns [0, -1, -2, -3]
 * range(0, -4, -1);
 *
 * @example
 * // Throws an error: The step value must be a non-zero integer.
 * range(1, 4, 0);
 */
declare function range(end: number): number[];
/**
 * Returns an array of numbers from `start` to `end`, incrementing by `step`.
 *
 * If `step` is not provided, it defaults to `1`.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} end - The end number of the range (exclusive).
 * @returns {number[]} An array of numbers from `start` to `end` with the specified `step`.
 *
 * @example
 * // Returns [1, 2, 3]
 * range(1, 4);
 */
declare function range(start: number, end: number): number[];
/**
 * Returns an array of numbers from `start` to `end`, incrementing by `step`.
 *
 * @param {number} start - The starting number of the range (inclusive).
 * @param {number} end - The end number of the range (exclusive).
 * @param {number} step - The step value for the range.
 * @returns {number[]} An array of numbers from `start` to `end` with the specified `step`.
 *
 * @example
 * // Returns [0, 5, 10, 15]
 * range(0, 20, 5);
 */
declare function range(start: number, end: number, step: number): number[];

export { range };
