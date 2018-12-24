// tslint:disable:no-magic-numbers

import { Denominator, OCTAVE, Scalar, to } from '@musical-patterns/utilities'

const OMNIZONK_MAX_EQUAL_DIVISION: Denominator = to.Denominator(24)
const OMNIZONK_MIN_EQUAL_DIVISION: Denominator = to.Denominator(1)
const OMNIZONK_WINDOW: Scalar = OCTAVE

const OMNIZONK_PITCH_SCALAR: Scalar = to.Scalar(440)

export {
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_WINDOW,
    OMNIZONK_PITCH_SCALAR,
}
