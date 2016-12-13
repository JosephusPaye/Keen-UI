const typeCheck = function(arg) {
    let t = typeof arg
    return (t === 'object' ? (arg == null ? 'null' : Object.prototype.toString.call(arg).slice(8,-1)) : t).toLowerCase()
}

export default typeCheck
