import { NoteSpec } from '@musical-patterns/compiler'
import { PitchScale } from '@musical-patterns/pattern'
import { ContourElement, from, Scalar, Time, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const buildNoteSpec: (contourElement: ContourElement<PitchScale>) => NoteSpec =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): NoteSpec => ({
        durationSpec: {
            scalar: from.Time<Scalar, Scalar<Time>>(OMNIZONK_FOREVER),
        },
        pitchSpec: {
            index: to.Ordinal(pitch),
            scaleIndex: to.Ordinal(pitchScale),
        },
    })

export {
    buildNoteSpec,
}
