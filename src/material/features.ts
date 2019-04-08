import { Note, PitchScale } from '@musical-patterns/material'
import { ContourElement, from, Scalar, Time, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const computeNote: (contourElement: ContourElement<PitchScale>) => Note =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): Note => ({
        duration: {
            scalar: from.Time<Scalar, Scalar<Time>>(OMNIZONK_FOREVER),
        },
        pitch: {
            index: to.Ordinal(pitch),
            scaleIndex: to.Ordinal(pitchScale),
        },
    })

export {
    computeNote,
}
