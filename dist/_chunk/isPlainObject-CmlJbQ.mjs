function isTypedArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function isPrimitive(value) {
    return value == null || (typeof value !== 'object' && typeof value !== 'function');
}

function isPlainObject(object) {
    if (typeof object !== 'object') {
        return false;
    }
    if (object == null) {
        return false;
    }
    if (Object.getPrototypeOf(object) === null) {
        return true;
    }
    if (object.toString() !== '[object Object]') {
        return false;
    }
    let proto = object;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(object) === proto;
}

export { isTypedArray as a, isPrimitive as b, isPlainObject as i };
