"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectToProperties(args) {
    var newArgs = [];
    for (var i in args) {
        newArgs.push({
            property: i,
            value: args[i]
        });
    }
    return newArgs;
}
exports.objectToProperties = objectToProperties;
