export function oneOf(...possibilities) {
    return {
        validator(value) {
            return possibilities.indexOf(value) != -1;
        },
        $meta: {
            oneOf: possibilities,
        },
    };
}

export function tippyPosition() {
    return oneOf(
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end'
    );
}

export function tippyTrigger() {
    const possibilities = ['mouseenter', 'focus', 'click', 'manual', 'hover']; // 'hover' is for backward compat (from Tether)

    return {
        validator(value) {
            return value
                .split(' ')
                .every(part => possibilities.indexOf(part) !== -1);
        },
        $meta: {
            oneOf: possibilities,
        },
    };
}

export function ref(componentName) {
    return {
        validator(refValue) {
            const isValid =
                refValue instanceof Element ||
                (refValue && refValue._isVue) ||
                typeof refValue === 'string';

            if (!isValid) {
                console.warn(
                    `[${componentName}]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.`
                );
            }

            return isValid;
        },
    };
}
