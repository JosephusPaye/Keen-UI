export function resetScroll(element) {
    if (!element) {
        return;
    }

    element.scrollTop = 0;
}

export default {
    resetScroll
};
