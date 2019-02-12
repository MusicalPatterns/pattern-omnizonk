import { NoteSpec } from '@musical-patterns/compiler'
import { Denominator, difference, from, Ratio, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const buildNoteSpec: (ratio: Ratio, minEqualDivision: Denominator) => NoteSpec =
    ([ equalDivisionStep, equalDivision ]: Ratio, minEqualDivision: Denominator): NoteSpec => ({
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
