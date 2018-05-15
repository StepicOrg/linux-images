const should = require("should")
const chai = require("chai")
const index = require("../src/index")
const assert = chai.assert

describe("Test index", function() {
    it("object", function() {
        const table = index.table
        assert(table, "Table exists")
        assert(table.leg, "Leg exists")
        assert(table.leg === 4, "Table has 4 legs")
    })
    it("function", function() {
        const fib = index.fib
        assert(fib, "Fib exists")
        assert(typeof fib == "function", "Fib is function")
        assert(fib(5) === 5, "Fifth")
        assert(fib(6) === 8, "Sixth")
    })
    it("class", function() {
        const CL = index.CL
        assert(CL, "CL exists")
        const cl = new CL(3)
        assert(cl.x === 3, "Attribute x exists")
        assert(typeof cl.add == "function", "add is function")
        assert(cl.add(2) === 5, "Function add work")
    })
})