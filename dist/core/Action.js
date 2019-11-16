"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Changeable_1 = require("./Changeable");
var Action = (function () {
    function Action(setDiscountInPercentage, modifyPrice, modifyDeliveryTime, hideOptionById, showOptionsById, changeProperties, setCustomProperties) {
        this._setDiscountInPercentage = setDiscountInPercentage ?
            setDiscountInPercentage > 0 && setDiscountInPercentage < 100 ?
                setDiscountInPercentage : undefined : setDiscountInPercentage;
        this.modifyPrice = modifyPrice;
        this.modifyDeliveryTime = modifyDeliveryTime;
        this.hideOptionsById = hideOptionById;
        this.showOptionsById = showOptionsById;
        this.changeProperties = changeProperties;
        this.setCustomProperties = setCustomProperties;
    }
    Object.defineProperty(Action.prototype, "setDiscountInPercentage", {
        get: function () {
            return this._setDiscountInPercentage;
        },
        set: function (value) {
            if (value) {
                if (value > 0 && value < 100) {
                    this._setDiscountInPercentage = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Action.build = function (_a) {
        var setDiscountInPercentage = _a.setDiscountInPercentage, hideOptionsById = _a.hideOptionsById, modifyDeliveryTime = _a.modifyDeliveryTime, modifyPrice = _a.modifyPrice, showOptionsById = _a.showOptionsById, changeProperties = _a.changeProperties, setCustomProperties = _a.setCustomProperties;
        var changePropertiesObj, setCustomPropertiesObj;
        if (modifyPrice)
            modifyPrice = Changeable_1.default.build(modifyPrice);
        if (modifyDeliveryTime)
            modifyDeliveryTime = Changeable_1.default.build(modifyDeliveryTime);
        if (changeProperties)
            changePropertiesObj = Object.keys(changeProperties).map(function (key) { return ({
                property: key,
                value: changeProperties[key]
            }); });
        if (setCustomProperties)
            setCustomPropertiesObj = Object.keys(setCustomProperties).map(function (key) { return ({
                property: key,
                value: setCustomProperties[key]
            }); });
        return new Action(setDiscountInPercentage, modifyPrice, modifyDeliveryTime, hideOptionsById, showOptionsById, changePropertiesObj, setCustomPropertiesObj);
    };
    Action.prototype.activate = function (contract) {
        if (this.modifyPrice)
            contract.price = this.modifyPrice.modify(contract.price);
        if (this.modifyDeliveryTime)
            contract.deliveryTime = this.modifyDeliveryTime.modify(contract.deliveryTime);
        if (this._setDiscountInPercentage)
            contract.price = contract.price * (100 - this._setDiscountInPercentage) / 100;
        if (this.showOptionsById) {
            var _loop_1 = function (id) {
                var option = contract.options.filter(function (opt) { return opt.id === id; })[0];
                if (option)
                    option.isHidden = false;
            };
            for (var _i = 0, _a = this.showOptionsById; _i < _a.length; _i++) {
                var id = _a[_i];
                _loop_1(id);
            }
        }
        if (this.hideOptionsById) {
            var _loop_2 = function (id) {
                var option = contract.options.filter(function (opt) { return opt.id === id; })[0];
                if (option)
                    option.isHidden = true;
            };
            for (var _b = 0, _c = this.hideOptionsById; _b < _c.length; _b++) {
                var id = _c[_b];
                _loop_2(id);
            }
        }
        if (this.changeProperties) {
            for (var _d = 0, _e = this.changeProperties; _d < _e.length; _d++) {
                var prop = _e[_d];
                if (contract[prop.property]) {
                    contract[prop.property] = prop.value;
                }
            }
        }
        if (this.setCustomProperties) {
            for (var _f = 0, _g = this.setCustomProperties; _f < _g.length; _f++) {
                var prop = _g[_f];
                contract[prop.property] = prop.value;
            }
        }
    };
    return Action;
}());
exports.default = Action;
