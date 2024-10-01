import { d as debounce } from '../_chunk/flowRight-B6rz-c.mjs';
export { a as after, e as ary, b as before, g as curryRight, h as flow, i as flowRight, m as memoize, c as negate, n as noop, o as once, p as partial, f as partialRight, r as rest, u as unary } from '../_chunk/flowRight-B6rz-c.mjs';

function throttle(func, throttleMs, { signal, edges = ['leading', 'trailing'] } = {}) {
    let pendingAt = null;
    const debounced = debounce(func, throttleMs, { signal, edges });
    const throttled = function (...args) {
        if (pendingAt == null) {
            pendingAt = Date.now();
        }
        else {
            if (Date.now() - pendingAt >= throttleMs) {
                pendingAt = Date.now();
                debounced.cancel();
                debounced(...args);
            }
        }
        debounced(...args);
    };
    throttled.cancel = debounced.cancel;
    throttled.flush = debounced.flush;
    return throttled;
}

function curry(func) {
    if (func.length === 0 || func.length === 1) {
        return func;
    }
    return function (arg) {
        return makeCurry(func, func.length, [arg]);
    };
}
function makeCurry(origin, argsLength, args) {
    if (args.length === argsLength) {
        return origin(...args);
    }
    else {
        const next = function (arg) {
            return makeCurry(origin, argsLength, [...args, arg]);
        };
        return next;
    }
}

function spread(func) {
    return function (argsArr) {
        return func.apply(this, argsArr);
    };
}

export { curry, debounce, spread, throttle };
