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
// protected
var emp = /** @class */ (function () {
    function emp(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return emp;
}());
var subEmp = /** @class */ (function (_super) {
    __extends(subEmp, _super);
    function subEmp(name, code, sal) {
        var _this = _super.call(this, name, code) || this;
        _this.sal = sal;
        return _this;
    }
    return subEmp;
}(emp));
var empp = new subEmp('allan', 12, 2000);
empp.empName = 'allan';
empp.empCode = 10;
