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
var companyy = /** @class */ (function () {
    function companyy(cName) {
        this.cName = cName;
    }
    return companyy;
}());
var employeee = /** @class */ (function (_super) {
    __extends(employeee, _super);
    function employeee(cName, empName, empCode) {
        var _this = _super.call(this, cName) || this;
        _this.empCode = empCode;
        _this.empName = empName;
        return _this;
    }
    employeee.prototype.profile = function () {
        console.log("company name: ".concat(this.cName));
        console.log("emp name: ".concat(this.empName));
        console.log("emp Code: ".concat(this.empCode));
    };
    return employeee;
}(companyy));
var aa = new employeee('allan', 'jimmy', 99);
aa.empName = 'Allannn';
aa.empCode = 25;
