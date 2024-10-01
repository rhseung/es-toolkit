/**
 * Checks if a given value is a plain object.
 *
 * @param {object} value - The value to check.
 * @returns {value is Record<PropertyKey, any>} - True if the value is a plain object, otherwise false.
 *
 * @example
 * console.log(isPlainObject({})); // true
 * console.log(isPlainObject([])); // false
 * console.log(isPlainObject(null)); // false
 * console.log(isPlainObject(Object.create(null))); // true
 * console.log(Buffer.from('hello, world')); // false
 */
declare function isPlainObject(value: unknown): value is Record<PropertyKey, any>;

export { isPlainObject };
