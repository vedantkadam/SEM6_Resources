var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(name) {
        this.name = name;
    }
    student.prototype.submit = function () {
        console.log("does submission");
    };
    return student;
}());
var s1 = /** @class */ (function (_super) {
    __extends(s1, _super);
    function s1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    s1.prototype.read = function () {
        console.log("does reading: ".concat(this.name));
    };
    return s1;
}(student));
var s2 = new s1("Allan");
s2.read();
s2.submit();
