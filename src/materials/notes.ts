import { NoteSpec } from '@musical-patterns/compiler'
import { Denominator, from, Ratio, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER, OMNIZONK_GAIN } from './constants'

const buildNoteSpec: (ratio: Ratio, minEqualDivision: Denominator) => NoteSpec =
    ([ step, equalDivision ]: Ratio, minEqualDivision: Denominator): NoteSpec =>
        ({
            durationSpec: {
                scalar: OMNIZONK_FOREVER,
            },
            gainSpec: {
                scalar: OMNIZONK_GAIN,
            },
            pitchSpec: {
                index: to.Index(from.FractionalPart(step) - 1),
                scaleIndex: to.Index(from.FractionalPart(equalDivision) - from.FractionalPart(minEqualDivision)),
            },
        })

export {
    buildNoteSpec,
}
