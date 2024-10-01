function isPrimitive(value) {
    return value == null || (typeof value !== 'object' && typeof value !== 'function');
}

function isTypedArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function isPlainObject(value) {
    if (typeof value !== 'object') {
        return false;
    }
    if (value == null) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    if (value.toString() !== '[object Object]') {
        return false;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}

export { isTypedArray as a, isPrimitive as b, isPlainObject as i };
