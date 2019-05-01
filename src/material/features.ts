import { Note, PitchScale, Scale } from '@musical-patterns/material'
import { as, ContourElement, Pitch, Scalar } from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER } from './constants'

const computeNote: (contourElement: ContourElement<PitchScale>) => Note =
    ([ pitch, pitchScale ]: ContourElement<PitchScale>): Note => ({
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(pitchScale),
        },
        value: {
            scalar: OMNIZONK_FOREVER,
        },
    })

export {
    computeNote,
}
