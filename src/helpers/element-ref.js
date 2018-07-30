export function validate(ref, warning) {
    const isValid = (ref instanceof Element) || (ref && ref._isVue) || (typeof ref === 'string');

    if (!isValid && warning) {
        console.warn(warning);
    }

    return isValid;
}

export function resolve(ref, fallback) {
    if (ref instanceof Element) {
        return ref;
    } else if (ref && ref._isVue) {
        return ref.$el;
    } else if (typeof ref === 'string') {
        return document.querySelector(ref);
    }

    return fallback;
}

export default {
    validate,
    resolve
};
