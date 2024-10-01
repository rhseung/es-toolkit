/**
 * Checks if a value is a JSON object.
 *
 * A valid JSON object is defined as an object with string keys and valid JSON values.
 *
 * @param {unknown} obj The value to check.
 * @returns {obj is Record<string, any>} True if `obj` is a JSON object, false otherwise.
 *
 * @example
 * isJSONObject({ nested: { boolean: true, array: [1, 2, 3], string: 'test', null: null } }); // true
 * isJSONObject({ regexp: /test/ }); // false
 * isJSONObject(123); // false
 */
declare function isJSONObject(obj: unknown): obj is Record<string, any>;

export { isJSONObject };
