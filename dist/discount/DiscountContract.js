"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConditionDocument_1 = require("./ConditionDocument");
var Select_1 = require("./Select");
var Action_1 = require("../core/Action");
var DiscountContract = (function () {
    function DiscountContract(id, name, condition, specificationMinVersion, selects, actions) {
        this.id = id;
        this.name = name;
        this.conditions = condition;
        this.specificationMinVersion = specificationMinVersion;
        this.selects = selects;
        this.actions = actions;
    }
    DiscountContract.build = function (_a) {
        var actions = _a.actions, conditions = _a.conditions, id = _a.id, name = _a.name, selects = _a.selects, specificationMinVersion = _a.specificationMinVersion;
        var selectsObj = selects.map(function (s) { return Select_1.default.build(s); });
        var conditionsObj = conditions.map(function (c) { return ConditionDocument_1.default.build(c); });
        var actionsObj = actions.map(function (a) { return Action_1.default.build(a); });
        return new DiscountContract(id, name, conditionsObj, specificationMinVersion, selectsObj, actionsObj);
    };
    DiscountContract.prototype.isActive = function (document) {
        if (document.productContract.discounts.includes(this) || this.canUseForContract(document.productContract)) {
            for (var _i = 0, _a = this.conditions; _i < _a.length; _i++) {
                var cond = _a[_i];
                if (!cond.check(document.productContractModified)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    DiscountContract.prototype.canUseForContract = function (contract) {
        for (var _i = 0, _a = this.selects; _i < _a.length; _i++) {
            var select = _a[_i];
            if (!select.check(contract))
                return false;
        }
        return true;
    };
    DiscountContract.prototype.activate = function (document) {
        for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            action.activate(document.productContractModified);
        }
    };
    return DiscountContract;
}());
exports.default = DiscountContract;
