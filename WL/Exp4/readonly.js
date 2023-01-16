// readonly
var worker = /** @class */ (function () {
    function worker(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return worker;
}());
var e = new worker('allan', 20);
e.empName = 'shyam';
e.empCode = 20;
