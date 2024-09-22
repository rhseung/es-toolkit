class AbortError extends Error {
    constructor(message = 'The operation was aborted') {
        super(message);
        this.name = 'AbortError';
    }
}

class TimeoutError extends Error {
    constructor(message = 'The operation was timed out') {
        super(message);
        this.name = 'TimeoutError';
    }
}

function delay(ms, { signal } = {}) {
    return new Promise((resolve, reject) => {
        const abortError = () => {
            reject(new AbortError());
        };
        const abortHandler = () => {
            clearTimeout(timeoutId);
            abortError();
        };
        if (signal?.aborted) {
            return abortError();
        }
        const timeoutId = setTimeout(() => {
            signal?.removeEventListener('abort', abortHandler);
            resolve();
        }, ms);
        signal?.addEventListener('abort', abortHandler, { once: true });
    });
}

async function timeout(ms) {
    await delay(ms);
    throw new TimeoutError();
}

async function withTimeout(run, ms) {
    return Promise.race([run(), timeout(ms)]);
}

export { AbortError as A, TimeoutError as T, delay as d, timeout as t, withTimeout as w };
