"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reason = (function () {
    function Reason(code, label, anyData) {
        this.code = code;
        this.label = label;
        this._rejectOption = anyData;
    }
    Object.defineProperty(Reason.prototype, "rejectOption", {
        get: function () {
            return this._rejectOption;
        },
        set: function (value) {
            this._rejectOption = value;
        },
        enumerable: false,
        configurable: true
    });
    return Reason;
}());
exports.default = Reason;
