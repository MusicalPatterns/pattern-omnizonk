import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Cardinal, Denominator, difference, from, Ratio, reciprocal, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER, OMNIZONK_GAIN } from './constants'

const buildNoteSpec: (ratio: Ratio, minEqualDivision: Denominator, entityCount: Cardinal) => NoteSpec =
    (
        [ equalDivisionStep, equalDivision ]: Ratio,
        minEqualDivision: Denominator,
        entityCount: Cardinal,
    ): NoteSpec =>
        ({
            durationSpec: {
                scalar: OMNIZONK_FOREVER,
            },
            gainSpec: {
                scalar: apply.Scalar(OMNIZONK_GAIN, to.Scalar(from.Cardinal(reciprocal(entityCount)))),
            },
            pitchSpec: {
                index: to.Ordinal(from.Numerator(equalDivisionStep)),
                scaleIndex: to.Ordinal(from.Denominator(difference(equalDivision, minEqualDivision))),
            },
        })

export {
    buildNoteSpec,
}
