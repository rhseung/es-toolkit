function before(n, func) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('n must be a non-negative integer.');
    }
    let counter = 0;
    return ((...args) => {
        if (++counter < n) {
            return func(...args);
        }
        return undefined;
    });
}

function after(n, func) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error(`n must be a non-negative integer.`);
    }
    let counter = 0;
    return ((...args) => {
        if (++counter >= n) {
            return func(...args);
        }
        return undefined;
    });
}

function debounce(func, debounceMs, { signal, edges } = {}) {
    let pendingThis = undefined;
    let pendingArgs = null;
    const leading = edges != null && edges.includes('leading');
    const trailing = edges == null || edges.includes('trailing');
    const invoke = () => {
        if (pendingArgs !== null) {
            func.apply(pendingThis, pendingArgs);
            pendingThis = undefined;
            pendingArgs = null;
        }
    };
    const onTimerEnd = () => {
        if (trailing) {
            invoke();
        }
        cancel();
    };
    let timeoutId = null;
    const schedule = () => {
        if (timeoutId != null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            onTimerEnd();
        }, debounceMs);
    };
    const cancelTimer = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };
    const cancel = () => {
        cancelTimer();
        pendingThis = undefined;
        pendingArgs = null;
    };
    const flush = () => {
        cancelTimer();
        invoke();
    };
    const debounced = function (...args) {
        if (signal?.aborted) {
            return;
        }
        pendingThis = this;
        pendingArgs = args;
        const isFirstCall = timeoutId == null;
        schedule();
        if (leading && isFirstCall) {
            invoke();
        }
    };
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener('abort', cancel, { once: true });
    return debounced;
}

function noop() { }

function once(func) {
    let called = false;
    let cache;
    return function () {
        if (called) {
            return cache;
        }
        const result = func();
        called = true;
        cache = result;
        return result;
    };
}

function negate(func) {
    return ((...args) => !func(...args));
}

function memoize(fn, options = {}) {
    const { cache = new Map(), getCacheKey } = options;
    const memoizedFn = function (arg) {
        const key = getCacheKey ? getCacheKey(arg) : arg;
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.call(this, arg);
        cache.set(key, result);
        return result;
    };
    memoizedFn.cache = cache;
    return memoizedFn;
}

function ary(func, n) {
    return function (...args) {
        return func.apply(this, args.slice(0, n));
    };
}

function unary(func) {
    return ary(func, 1);
}

function partial(func, ...partialArgs) {
    return function (...providedArgs) {
        const args = [];
        let startIndex = 0;
        for (let i = 0; i < partialArgs.length; i++) {
            const arg = partialArgs[i];
            if (arg === partial.placeholder) {
                args.push(providedArgs[startIndex++]);
            }
            else {
                args.push(arg);
            }
        }
        for (let i = startIndex; i < providedArgs.length; i++) {
            args.push(providedArgs[i]);
        }
        return func.apply(this, args);
    };
}
const partialPlaceholder = Symbol('partial.placeholder');
partial.placeholder = partialPlaceholder;

function partialRight(func, ...partialArgs) {
    return function (...providedArgs) {
        const placeholderLength = partialArgs.filter(arg => arg === partialRightPlaceholder).length;
        const rangeLength = Math.max(providedArgs.length - placeholderLength, 0);
        const args = [];
        let providedIndex = 0;
        for (let i = 0; i < rangeLength; i++) {
            args.push(providedArgs[providedIndex++]);
        }
        for (let i = 0; i < partialArgs.length; i++) {
            const arg = partialArgs[i];
            if (arg === partialRight.placeholder) {
                args.push(providedArgs[providedIndex++]);
            }
            else {
                args.push(arg);
            }
        }
        return func.apply(this, args);
    };
}
const partialRightPlaceholder = Symbol('partialRight.placeholder');
partialRight.placeholder = partialRightPlaceholder;

function rest(func, startIndex = func.length - 1) {
    return function (...args) {
        const rest = args.slice(startIndex);
        const params = args.slice(0, startIndex);
        while (params.length < startIndex) {
            params.push(undefined);
        }
        return func.apply(this, [...params, rest]);
    };
}

export { after as a, before as b, negate as c, debounce as d, ary as e, partialRight as f, memoize as m, noop as n, once as o, partial as p, rest as r, unary as u };
