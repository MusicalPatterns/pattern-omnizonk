"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var custom_1 = require("../custom");
var notes_1 = require("./notes");
var buildEntities = function (patternSpec) {
    var equalDivisions = custom_1.buildEqualDivisions(patternSpec);
    return equalDivisions.reduce(function (accumulatingEntities, equalDivision) {
        var newEntities = utilities_1.numbers.slice(utilities_1.from.Index(utilities_1.INITIAL), utilities_1.from.FractionalPart(equalDivision))
            .map(function (step) { return ({
            noteSpecs: [notes_1.buildNoteSpec([utilities_1.to.Numerator(step), equalDivision], patternSpec.minEqualDivision)],
        }); });
        return accumulatingEntities.concat(newEntities);
    }, []);
};
exports.buildEntities = buildEntities;
//# sourceMappingURL=entities.js.map