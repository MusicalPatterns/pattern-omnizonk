import { Note, PitchValueEnvelopeScale, Scale, SILENT } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Intensity,
    Pitch,
    product,
    Rational,
    Scalar,
    use,
    Value,
} from '@musical-patterns/utilities'
import { OMNIZONK_FOREVER, OMNIZONK_INSTANT } from './constants'

const computeSpaceholderNote: (equalDivisionStep: Rational) => Note =
    (equalDivisionStep: Rational): Note => ({
        envelope: {
            scalar: OMNIZONK_INSTANT,
        },
        intensity: {
            scalar: SILENT,
        },
        value: {
            scalar: use.Scalar(
                OMNIZONK_FOREVER,
                as.Scalar<Scalar<Value>>(as.number(equalDivisionStep)) || as.Scalar<Value>(0),
            ),
        },
    })

const computeNote: (contourElement: ContourElement<PitchValueEnvelopeScale>) => Note =
    ([ pitch, value, envelope, pitchScale ]: ContourElement<PitchValueEnvelopeScale>): Note => ({
        envelope: {
            scalar: product(OMNIZONK_FOREVER, as.Scalar<Value>(envelope)),
        },
        intensity: {
            scalar: as.Scalar<Intensity>(value),
        },
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(pitchScale),
        },
        value: {
            scalar: product(OMNIZONK_FOREVER, as.Scalar<Value>(value)),
        },
    })

export {
    PitchValueEnvelopeScale,
    computeNote,
    computeSpaceholderNote,
}
