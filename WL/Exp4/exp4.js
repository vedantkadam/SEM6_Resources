// access modifiers .3 modifers
// 1 public
// 2 private
// 3 protected
var computer = /** @class */ (function () {
    function computer() {
    }
    return computer;
}());
var c1 = new computer(); //c1 is the instance of the class computer
c1.brand; //visible
c1.brand = "hp"; //accessible
c1.resoulution = 1600; //visible and accessible
