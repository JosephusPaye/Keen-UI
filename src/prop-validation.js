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
