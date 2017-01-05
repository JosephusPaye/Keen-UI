export function inView(element, container) {
    if (!element) {
        return;
    }

    container = container || element.parentElement;

    const top = element.offsetTop;
    const parentTop = container.scrollTop;
    const bottom = top + element.offsetHeight;
    const parentBottom = container.offsetHeight;

    return top >= parentTop && bottom <= parentBottom;
}

export function scrollIntoView(element, options = { container: null, marginTop: 0 }) {
    if (!element) {
        return;
    }

    options.container = options.container || element.parentElement;

    if (inView(element, options.container)) {
        return;
    }

    options.container.scrollTop = element.offsetTop - options.marginTop;
}

export function resetScroll(element) {
    if (!element) {
        return;
    }

    element.scrollTop = 0;
}

export default {
    inView,
    scrollIntoView,
    resetScroll
};
