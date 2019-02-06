import { NoteSpec } from '@musical-patterns/compiler'
import { apply, Cardinal, Denominator, from, Ratio, reciprocal, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER, OMNIZONK_GAIN } from './constants'

const buildNoteSpec: (ratio: Ratio, minEqualDivision: Denominator, entityCount: Cardinal) => NoteSpec =
    ([ step, equalDivision ]: Ratio, minEqualDivision: Denominator, entityCount: Cardinal): NoteSpec =>
        ({
            durationSpec: {
                scalar: OMNIZONK_FOREVER,
            },
            gainSpec: {
                scalar: to.Scalar(apply.Scalar(
                    from.Scalar(OMNIZONK_GAIN),
                    to.Scalar(reciprocal(from.Cardinal(entityCount))),
                )),
            },
            pitchSpec: {
                index: to.Ordinal(from.FractionalPart(step)),
                scaleIndex: to.Ordinal(from.FractionalPart(equalDivision) - from.FractionalPart(minEqualDivision)),
            },
        })

export {
    buildNoteSpec,
}
