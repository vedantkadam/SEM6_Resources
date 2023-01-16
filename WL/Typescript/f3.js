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
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.sleep = function () {
        console.log("sleeping");
    };
    return animal;
}());
var bird = /** @class */ (function (_super) {
    __extends(bird, _super);
    function bird(name) {
        var _this = this;
        console.log("sleeping1");
        _this = _super.call(this, name) || this;
        return _this;
    }
    return bird;
}(animal));
var hen = /** @class */ (function (_super) {
    __extends(hen, _super);
    function hen(name) {
        var _this = this;
        console.log("sleeping2");
        _this = _super.call(this, name) || this;
        return _this;
    }
    return hen;
}(bird));
var heena = new hen("sfit");
// heena.eat();
// heena.fly();
// heena.sleep();
