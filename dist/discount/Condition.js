"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Condition = (function () {
    function Condition(where, and, or) {
        this.where = where;
        this.AND = and;
        this.OR = or;
    }
    Condition.buildCondition = function (_a, type) {
        var _this = this;
        var where = _a.where, OR = _a.OR, AND = _a.AND, args = __rest(_a, ["where", "OR", "AND"]);
        if (OR)
            OR = OR.map(function (i) { return _this.buildCondition(i, type); });
        if (AND)
            AND = AND.map(function (i) { return _this.buildCondition(i, type); });
        return new type(where, AND, OR, args);
    };
    Condition.prototype.check = function (checkObject) {
        if (this.where) {
            if (this.where.length) {
                for (var _i = 0, _a = this.where; _i < _a.length; _i++) {
                    var cond = _a[_i];
                    if (checkObject[cond.property] !== cond.value) {
                        return false;
                    }
                }
            }
        }
        if (this.OR) {
            if (this.OR.length) {
                for (var _b = 0, _c = this.OR; _b < _c.length; _b++) {
                    var cond = _c[_b];
                    if (cond.check(checkObject))
                        return true;
                }
            }
        }
        if (this.AND) {
            if (this.AND.length) {
                for (var _d = 0, _e = this.AND; _d < _e.length; _d++) {
                    var cond = _e[_d];
                    if (!cond.check(checkObject))
                        return false;
                }
            }
        }
        return true;
    };
    return Condition;
}());
exports.default = Condition;
