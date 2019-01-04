"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("./constants");
var buildNoteSpec = function (_a, minEqualDivision) {
    var _b = __read(_a, 2), step = _b[0], equalDivision = _b[1];
    return ({
        durationSpec: {
            scalar: constants_1.OMNIZONK_FOREVER,
        },
        gainSpec: {
            scalar: constants_1.OMNIZONK_GAIN,
        },
        pitchSpec: {
            index: utilities_1.to.Index(utilities_1.from.FractionalPart(step) - 1),
            scaleIndex: utilities_1.to.Index(utilities_1.from.FractionalPart(equalDivision) - utilities_1.from.FractionalPart(minEqualDivision)),
        },
    });
};
exports.buildNoteSpec = buildNoteSpec;
//# sourceMappingURL=notes.js.map