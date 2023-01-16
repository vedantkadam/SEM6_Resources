// static
var home = /** @class */ (function () {
    function home() {
    }
    home.a = function (b) {
        console.log(this.n * b);
    };
    home.prototype.c = function (d) {
        console.log(this.n * d);
    };
    home.n = 2;
    return home;
}());
home.n;
home.a(3); //static methods can be accessed using dot notations
home.c(4); //c is not static method 
var e1 = new home();
e1.c(6);
