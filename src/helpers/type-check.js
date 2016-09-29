const typeCheck = function(arg) {
    let t = typeof arg;
    if (t === 'object') {
        return (arg == null ?
            'null' : Object.prototype.toString.call(arg).slice(8, -1)).toLowerCase();
    }
    return t;
};

export default typeCheck;
