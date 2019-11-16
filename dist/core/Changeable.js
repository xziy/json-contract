"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Changeable = (function () {
    function Changeable(increase, decrease, set) {
        this.increase = increase;
        this.decrease = decrease;
        this.set = set;
    }
    Changeable.build = function (_a) {
        var increase = _a.increase, decrease = _a.decrease, set = _a.set;
        return new Changeable(increase, decrease, set);
    };
    Changeable.prototype.modify = function (value) {
        if (this.increase)
            value += this.increase;
        if (this.decrease)
            value -= this.decrease;
        if (this.set)
            value = this.set;
        return value;
    };
    Changeable.prototype.getJSON = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return Changeable;
}());
exports.default = Changeable;
