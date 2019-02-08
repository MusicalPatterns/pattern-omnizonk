// tslint:disable no-magic-numbers

import {
    Base,
    Denominator,
    Hz,
    OCTAVE,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const OMNIZONK_INITIAL_MAX_EQUAL_DIVISION: Denominator = to.Denominator(24)
const OMNIZONK_INITIAL_MIN_EQUAL_DIVISION: Denominator = to.Denominator(1)
const OMNIZONK_INITIAL_WINDOW: Base = OCTAVE

const OMNIZONK_INITIAL_BASE_FREQUENCY: Hz =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

const MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES: Denominator = to.Denominator(67)

export {
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    OMNIZONK_INITIAL_WINDOW,
    OMNIZONK_INITIAL_BASE_FREQUENCY,
    MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES,
}
