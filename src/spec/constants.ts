// tslint:disable no-magic-numbers

import {
    as,
    Denominator,
    Frequency,
    Logarithm, Maybe,
    musicalAs,
    OCTAVE,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    SCIENTIFIC_PITCHES,
    Tone,
} from '@musical-patterns/utilities'

const OMNIZONK_INITIAL_MAX_EQUAL_DIVISION: Denominator = as.Denominator(24)
const OMNIZONK_INITIAL_PERIOD: Logarithm<Frequency> = OCTAVE

const OMNIZONK_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

const MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES: Denominator = as.Denominator(67)

const WASH_PRESET_MAX_EQUAL_DIVISION: Denominator = as.Denominator(35)
const WASH_PRESET_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(140)

const ZONK_PRESET_EQUAL_DIVISION: Denominator = as.Denominator(12)

const PEEPHOLE_PRESET_EQUAL_DIVISION: Denominator = MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES
const PEEPHOLE_PERIOD: Logarithm<Frequency> = as.Logarithm<Frequency>(1.01492537313)
const PEEPHOLE_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(1111)

const SCREEN_PRESET_MAX_EQUAL_DIVISION: Denominator = as.Denominator(15)
const SCREEN_MAX_FILTERED_EQUAL_DIVISION: Denominator = as.Denominator(13)
const SCREEN_PRESET_PERIOD: Logarithm<Frequency> = as.Logarithm<Frequency>(2.8)

const PORTAL_PRESET_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(208)
const PORTAL_PRESET_MAX_EQUAL_DIVISION: Denominator = as.Denominator(26)
const PORTAL_PRESET_PERIOD: Logarithm<Frequency> = as.Logarithm<Frequency>(52)

const WOBBLE_PRESET_EQUAL_DIVISION: Denominator = as.Denominator(9)
const WOBBLE_PRESET_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(133)
const WOBBLE_PRESET_PERIOD: Logarithm<Frequency> = as.Logarithm<Frequency>(1.33)

export {
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_PERIOD,
    OMNIZONK_INITIAL_HZ_PHYSICALIZATION,
    MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES,
    WASH_PRESET_MAX_EQUAL_DIVISION,
    WASH_PRESET_HZ_PHYSICALIZATION,
    ZONK_PRESET_EQUAL_DIVISION,
    PEEPHOLE_PRESET_EQUAL_DIVISION,
    PEEPHOLE_HZ_PHYSICALIZATION,
    PEEPHOLE_PERIOD,
    SCREEN_MAX_FILTERED_EQUAL_DIVISION,
    SCREEN_PRESET_MAX_EQUAL_DIVISION,
    SCREEN_PRESET_PERIOD,
    PORTAL_PRESET_HZ_PHYSICALIZATION,
    PORTAL_PRESET_MAX_EQUAL_DIVISION,
    PORTAL_PRESET_PERIOD,
    WOBBLE_PRESET_HZ_PHYSICALIZATION,
    WOBBLE_PRESET_EQUAL_DIVISION,
    WOBBLE_PRESET_PERIOD,
}
