const assert = require("assert")

describe("TSC", function() {
    it("Calculator", function() {
        const Calculator = require("../build/calculator.js").Calculator
        assert(Calculator, "Calculator exists")
        let calc = new Calculator(3)
        assert(calc, "Exemplar created")
        assert(calc.x === 3, "Parameter received")
        assert(calc.add(2) === 5, "Sum is correct")
    })
})