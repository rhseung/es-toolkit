/**
 * Defers invoking the `func` until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.
 *
 * @param {F} func The function to defer.
 * @param {Parameters<F>} args The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 *
 * @example
 * defer((text) => {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after the current call stack has cleared.
 */
declare function defer<F extends (...args: any[]) => any>(func: F, ...args: Parameters<F>): number;

export { defer };
