var calculatorr = /** @class */ (function () {
    function calculatorr(x, y) {
        this.x = x;
        this.y = y;
    }
    calculatorr.prototype.addition = function () {
        console.log(this.x + this.y);
    };
    return calculatorr;
}());
var cal = new calculatorr(6, 9); //public method of class cal is accessible using instance
cal.addition();
