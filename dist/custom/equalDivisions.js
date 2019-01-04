"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var buildEqualDivisions = function (_a) {
    var maxEqualDivision = _a.maxEqualDivision, minEqualDivision = _a.minEqualDivision;
    return utilities_1.numbers
        .map(function (n) { return n - 1; })
        .slice(utilities_1.from.FractionalPart(minEqualDivision), utilities_1.apply.Offset(utilities_1.from.FractionalPart(maxEqualDivision), utilities_1.INCLUSIVE))
        .map(utilities_1.to.Denominator);
};
exports.buildEqualDivisions = buildEqualDivisions;
//# sourceMappingURL=equalDivisions.js.map