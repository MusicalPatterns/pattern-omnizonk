import { NoteSpec } from '@musical-patterns/compiler'
import { PitchScale } from '@musical-patterns/pattern'
import { ContourElement, from, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const buildNoteSpec: (contourElement: ContourElement<PitchScale>) => NoteSpec =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): NoteSpec => ({
        durationSpec: {
            scalar: from.Time(OMNIZONK_FOREVER) as Scalar,
        },
        pitchSpec: {
            index: to.Ordinal(pitch),
            scaleIndex: to.Ordinal(pitchScale),
        },
    })

export {
    buildNoteSpec,
}
