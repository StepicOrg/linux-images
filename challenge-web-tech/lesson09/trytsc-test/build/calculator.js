"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator(x) {
        this.x = x;
    }
    Calculator.prototype.add = function (y) {
        return this.x + y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
