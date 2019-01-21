// tslint:disable:no-magic-numbers

import { Base, Denominator, Frequency, OCTAVE, to } from '@musical-patterns/utilities'

const OMNIZONK_MAX_EQUAL_DIVISION: Denominator = to.Denominator(24)
const OMNIZONK_MIN_EQUAL_DIVISION: Denominator = to.Denominator(1)
const OMNIZONK_WINDOW: Base = OCTAVE

const OMNIZONK_BASE_FREQUENCY: Frequency = to.Frequency(440)

export {
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_WINDOW,
    OMNIZONK_BASE_FREQUENCY,
}
