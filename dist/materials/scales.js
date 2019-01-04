"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var custom_1 = require("../custom");
var buildScales = function (patternSpec) {
    var equalDivisions = custom_1.buildEqualDivisions(patternSpec);
    return equalDivisions.map(function (equalDivision) { return ({
        offset: patternSpec.patternPitchOffset,
        scalar: patternSpec.patternPitchScalar,
        scalars: utilities_1.numbers.slice(utilities_1.from.Index(utilities_1.INITIAL), utilities_1.from.FractionalPart(equalDivision))
            .map(function (step) {
            var windowAsBase = utilities_1.to.Base(utilities_1.from.Scalar(patternSpec.window));
            var stepAsPower = utilities_1.to.Power((step - 1) / utilities_1.from.FractionalPart(equalDivision));
            return utilities_1.to.Scalar(utilities_1.from.Base(utilities_1.apply.Power(windowAsBase, stepAsPower)));
        }),
    }); });
};
exports.buildScales = buildScales;
//# sourceMappingURL=scales.js.map