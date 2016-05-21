export function inView(element, container) {
    if (!element) {
        return;
    }

    container = container || element.parentElement;

    let top = element.offsetTop;
    let parentTop = container.scrollTop;
    let bottom = top + element.offsetHeight;
    let parentBottom = container.offsetHeight;

    return top >= parentTop && bottom <= parentBottom;
}

export function scrollIntoView(element, container, marginTop = 0) {
    if (!element || inView(element, container)) {
        return;
    }

    container = container || element.parentElement;

    container.scrollTop = element.offsetTop - marginTop;
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
