import { Note, PitchScale, Scale } from '@musical-patterns/material'
import { as, ContourElement, Scalar } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const computeNote: (contourElement: ContourElement<PitchScale>) => Note =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): Note => ({
        duration: {
            scalar: OMNIZONK_FOREVER,
        },
        pitch: {
            index: as.Ordinal<Scalar>(pitch),
            scaleIndex: as.Ordinal<Scale>(pitchScale),
        },
    })

export {
    computeNote,
}
