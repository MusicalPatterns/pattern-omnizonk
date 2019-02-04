import { NoteSpec } from '@musical-patterns/compiler'
import { Count, Denominator, from, Ratio, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER, OMNIZONK_GAIN } from './constants'

const buildNoteSpec: (ratio: Ratio, minEqualDivision: Denominator, entityCount: Count) => NoteSpec =
    ([ step, equalDivision ]: Ratio, minEqualDivision: Denominator, entityCount: Count): NoteSpec =>
        ({
            durationSpec: {
                scalar: OMNIZONK_FOREVER,
            },
            gainSpec: {
                scalar: to.Scalar(from.Scalar(OMNIZONK_GAIN) / from.Count(entityCount)),
            },
            pitchSpec: {
                index: to.Index(from.FractionalPart(step)),
                scaleIndex: to.Index(from.FractionalPart(equalDivision) - from.FractionalPart(minEqualDivision)),
            },
        })

export {
    buildNoteSpec,
}
