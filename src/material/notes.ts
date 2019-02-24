import { NoteSpec } from '@musical-patterns/compiler'
import { Denominator, difference, Fraction, from, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const buildNoteSpec: (fraction: Fraction, minEqualDivision: Denominator) => NoteSpec =
    ([ equalDivisionStep, equalDivision ]: Fraction, minEqualDivision: Denominator): NoteSpec => ({
        durationSpec: {
            scalar: OMNIZONK_FOREVER,
        },
        pitchSpec: {
            index: to.Ordinal(from.Numerator(equalDivisionStep)),
            scaleIndex: to.Ordinal(from.Denominator(difference(equalDivision, minEqualDivision))),
        },
    })

export {
    buildNoteSpec,
}
