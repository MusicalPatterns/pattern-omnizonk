import { NoteSpec } from '@musical-patterns/compiler'
import { Denominator, difference, Fraction, from, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const buildNoteSpec: (fraction: Fraction, minEqualDivision: Denominator) => NoteSpec =
    ([ equalDivisionStep, equalDivision ]: Fraction, minEqualDivision: Denominator): NoteSpec => ({
        durationSpec: {
            scalar: from.Time(OMNIZONK_FOREVER) as Scalar,
        },
        pitchSpec: {
            index: to.Ordinal(from.Numerator(equalDivisionStep)),
            scaleIndex: to.Ordinal(from.Denominator(difference(equalDivision, minEqualDivision))),
        },
    })

export {
    buildNoteSpec,
}
