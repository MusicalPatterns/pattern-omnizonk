import { Note, PitchScale, Scale } from '@musical-patterns/material'
import { ContourElement, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const computeNote: (contourElement: ContourElement<PitchScale>) => Note =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): Note => ({
        duration: {
            scalar: OMNIZONK_FOREVER,
        },
        pitch: {
            index: to.Ordinal<Scalar>(pitch),
            scaleIndex: to.Ordinal<Scale>(pitchScale),
        },
    })

export {
    computeNote,
}
