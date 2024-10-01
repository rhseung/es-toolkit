/**
 * Checks if a given value is a valid JSON array.
 *
 * A valid JSON array is defined as an array where all items are valid JSON values.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is any[]} - True if the value is a valid JSON array, otherwise false.
 *
 * @example
 * console.log(isJSONArray([1, 2, 3])); // true
 * console.log(isJSONArray(["string", null, true])); // true
 * console.log(isJSONArray([1, 2, () => {}])); // false
 * console.log(isJSONArray("not an array")); // false
 */
declare function isJSONArray(value: unknown): value is any[];

export { isJSONArray };
