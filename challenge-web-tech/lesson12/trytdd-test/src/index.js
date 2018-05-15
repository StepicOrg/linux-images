module.exports.table = {
    leg: 4
}

module.exports.fib = function(n) {
    if(n < 1)
        return
    if(n === 1)
        return 1
    let x = 1
    let y = 1
    let index = 2
    while(index < n) {
        let z = y + x
        x = y
        y = z
        index++
    }
    return y
}

module.exports.CL = class {
    constructor(x) {
        this.x = x
    }
    add(y) {
        return this.x + y
    }
}