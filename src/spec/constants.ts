// tslint:disable no-magic-numbers

import {
    Base,
    Denominator,
    Frequency,
    Hz,
    OCTAVE,
    ofFrom,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const OMNIZONK_INITIAL_MAX_EQUAL_DIVISION: Denominator = to.Denominator(24)
const OMNIZONK_INITIAL_MIN_EQUAL_DIVISION: Denominator = to.Denominator(1)
const OMNIZONK_INITIAL_WINDOW: Base<Frequency> = OCTAVE
const OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION: Denominator = to.Denominator(0)

const OMNIZONK_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(ofFrom(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]))

const MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES: Denominator = to.Denominator(67)

const WASH_PRESET_MAX_EQUAL_DIVISION: Denominator = to.Denominator(35)
const WASH_PRESET_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(140)

const ZONK_PRESET_EQUAL_DIVISION: Denominator = to.Denominator(12)

const PEEPHOLE_PRESET_EQUAL_DIVISION: Denominator = MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES
const PEEPHOLE_WINDOW: Base<Frequency> = to.Base<Frequency>(1.01492537313)
const PEEPHOLE_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(1111)

const SCREEN_PRESET_MAX_EQUAL_DIVISION: Denominator = to.Denominator(15)
const SCREEN_MAX_FILTERED_EQUAL_DIVISION: Denominator = to.Denominator(13)
const SCREEN_PRESET_WINDOW: Base<Frequency> = to.Base<Frequency>(2.8)

const PORTAL_PRESET_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(208)
const PORTAL_PRESET_MAX_EQUAL_DIVISION: Denominator = to.Denominator(26)
const PORTAL_PRESET_WINDOW: Base<Frequency> = to.Base<Frequency>(52)

const WOBBLE_PRESET_EQUAL_DIVISION: Denominator = to.Denominator(9)
const WOBBLE_PRESET_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(133)
const WOBBLE_PRESET_WINDOW: Base<Frequency> = to.Base<Frequency>(1.33)

export {
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    OMNIZONK_INITIAL_WINDOW,
    OMNIZONK_INITIAL_BASE_FREQUENCY,
    MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES,
    OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    WASH_PRESET_MAX_EQUAL_DIVISION,
    WASH_PRESET_BASE_FREQUENCY,
    ZONK_PRESET_EQUAL_DIVISION,
    PEEPHOLE_PRESET_EQUAL_DIVISION,
    PEEPHOLE_BASE_FREQUENCY,
    PEEPHOLE_WINDOW,
    SCREEN_MAX_FILTERED_EQUAL_DIVISION,
    SCREEN_PRESET_MAX_EQUAL_DIVISION,
    SCREEN_PRESET_WINDOW,
    PORTAL_PRESET_BASE_FREQUENCY,
    PORTAL_PRESET_MAX_EQUAL_DIVISION,
    PORTAL_PRESET_WINDOW,
    WOBBLE_PRESET_BASE_FREQUENCY,
    WOBBLE_PRESET_EQUAL_DIVISION,
    WOBBLE_PRESET_WINDOW,
}
