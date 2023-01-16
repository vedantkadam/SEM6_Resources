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
var staff = /** @class */ (function () {
    function staff(name) {
        this.name = name;
    }
    staff.prototype.code = function () {
        console.log("Coding:" + this.name);
    };
    return staff;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    teacher.prototype.subject = function () {
        console.log("Teaching");
    };
    return teacher;
}(staff));
var office = /** @class */ (function (_super) {
    __extends(office, _super);
    function office(name) {
        var _this = _super.call(this, name) || this;
        console.log("My name is ".concat(name, " "));
        return _this;
    }
    office.prototype.grade = function () {
        console.log("office");
    };
    return office;
}(teacher));
var example = new office("Allan");
example.code();
example.subject();
example.grade();
