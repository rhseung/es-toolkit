/**
 * Finds the first item in an array that matches the given predicate function.
 *
 * @template T
 * @param {T[]} arr - The array to search through.
 * @param {(item: T, index: number, arr: T[]) => unknown} doesMatch - A function that takes an item, its index, and the array, and returns a truthy value if the item matches the criteria.
 * @returns {T | undefined} - The first item that matches the predicate, or `undefined` if no match is found.
 *
 * @example
 * // Using a predicate function
 * const items = [1, 2, 3, 4, 5];
 * const result = find(items, (item) => item > 3);
 * console.log(result); // 4
 */
declare function find<T>(arr: readonly T[], doesMatch: (item: T, index: number, arr: readonly T[]) => unknown): T | undefined;
/**
 * Finds the first item in an array that matches the given partial object.
 *
 * @template T
 * @param {T[]} arr - The array to search through.
 * @param {Partial<T>} doesMatch - A partial object that specifies the properties to match.
 * @returns {T | undefined} - The first item that matches the partial object, or `undefined` if no match is found.
 *
 * @example
 * // Using a partial object
 * const items = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const result = find(items, { name: 'Bob' });
 * console.log(result); // { id: 2, name: 'Bob' }
 */
declare function find<T>(arr: readonly T[], doesMatch: Partial<T>): T | undefined;
/**
 * Finds the first item in an array that matches a property with a specific value.
 *
 * @template T
 * @param {readonly T[]} arr - The array to search through.
 * @param {[keyof T, unknown]} doesMatchProperty - An array where the first element is the property key and the second element is the value to match.
 * @returns {T | undefined} - The first item that has the specified property value, or `undefined` if no match is found.
 *
 * @example
 * // Using a property-value pair
 * const items = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const result = find(items, ['name', 'Alice']);
 * console.log(result); // { id: 1, name: 'Alice' }
 */
declare function find<T>(arr: readonly T[], doesMatchProperty: [keyof T, unknown]): T | undefined;
/**
 * Finds the first item in an array that has a specific property, where the property name is provided as a string.
 *
 * @template T
 * @param {readonly T[]} arr - The array to search through.
 * @param {string} propertyToCheck - The property name to check.
 * @returns {T | undefined} - The first item that has the specified property, or `undefined` if no match is found.
 *
 * @example
 * // Using a property name
 * const items = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const result = find(items, 'name');
 * console.log(result); // { id: 1, name: 'Alice' }
 */
declare function find<T>(arr: readonly T[], propertyToCheck: string): T | undefined;
/**
 * Finds the first item in an object that matches the given predicate function.
 *
 * @template T
 * @param {T extends Record<string, unknown> ? T : never} object - The object to search through.
 * @param {(item: T[keyof T], index: number, arr: T) => unknown} doesMatch - A function that takes an item, its key, and the object, and returns a truthy value if the item matches the criteria.
 * @returns {T | undefined} - The first property value that matches the predicate, or `undefined` if no match is found.
 *
 * @example
 * // Using a predicate function
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = find(obj, (item) => item > 2);
 * console.log(result); // 3
 */
declare function find<T extends Record<string, unknown>>(object: T, doesMatch: (item: T[keyof T], index: number, object: T) => unknown): T | undefined;
/**
 * Finds the first item in an object that matches the given partial value.
 *
 * @template T
 * @param {T extends Record<string, unknown> ? T : never} object - The object to search through.
 * @param {Partial<T[keyof T]>} doesMatch - A partial value to match against the values of the object.
 * @returns {T | undefined} - The first property value that matches the partial value, or `undefined` if no match is found.
 *
 * @example
 * // Using a partial value
 * const obj = { a: { id: 1, name: 'Alice' }, b: { id: 2, name: 'Bob' } };
 * const result = find(obj, { name: 'Bob' });
 * console.log(result); // { id: 2, name: 'Bob' }
 */
declare function find<T extends Record<string, unknown>>(object: T, doesMatch: Partial<T[keyof T]>): T | undefined;
/**
 * Finds the first item in an object that matches a property with a specific value.
 *
 * @template T
 * @param {readonly T[]} object - The object to search through.
 * @param {[keyof T, unknown]} doesMatchProperty - An array where the first element is the property key and the second element is the value to match.
 * @returns {T | undefined} - The first item that has the specified property value, or `undefined` if no match is found.
 *
 * @example
 * // Using a property-value pair
 * const items = { alice: { id: 1, name: 'Alice' }, bob: { id: 2, name: 'Bob' } };
 * const result = find(items, ['name', 'Alice']);
 * console.log(result); // { id: 1, name: 'Alice' }
 */
declare function find<T extends Record<string, unknown>>(object: T, doesMatchProperty: [keyof T, unknown]): T | undefined;
/**
 * Finds the first item in an object that has a specific property, where the property name is provided as a string.
 *
 * @template T
 * @param {T extends Record<string, unknown> ? T : never} object - The object to search through.
 * @param {string} propertyToCheck - The property name to check.
 * @returns {T | undefined} - The first property value that has the specified property, or `undefined` if no match is found.
 *
 * @example
 * // Using a property name
 * const obj = { a: { id: 1, name: 'Alice' }, b: { id: 2, name: 'Bob' } };
 * const result = find(obj, 'name');
 * console.log(result); // { id: 1, name: 'Alice' }
 */
declare function find<T extends Record<string, unknown>>(object: T, propertyToCheck: string): T | undefined;

export { find };
