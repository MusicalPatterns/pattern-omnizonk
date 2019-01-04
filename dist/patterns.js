"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = require("@musical-patterns/registry");
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("./constants");
var materials_1 = require("./materials");
var material = {
    buildEntitiesFunction: materials_1.buildEntities,
    buildScalesFunction: materials_1.buildScales,
};
var metadata = {
    description: 'every equal division of the octave at once',
    formattedName: 'Omnizonk',
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
};
var spec = {
    maxEqualDivision: constants_1.OMNIZONK_MAX_EQUAL_DIVISION,
    minEqualDivision: constants_1.OMNIZONK_MIN_EQUAL_DIVISION,
    patternPitchOffset: utilities_1.to.Offset(0),
    patternPitchScalar: constants_1.OMNIZONK_PITCH_SCALAR,
    window: constants_1.OMNIZONK_WINDOW,
};
var pattern = {
    material: material,
    metadata: metadata,
    patternId: registry_1.PatternId.OMNIZONK,
    spec: spec,
};
exports.pattern = pattern;
//# sourceMappingURL=patterns.js.map