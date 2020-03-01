import { as, ContourElement, Denominator, difference, quotient, Rational } from '@musical-patterns/utilities'
import { PitchValueEnvelopeScale } from './features'

const computeContourElement:
    (equalDivisionStep: Rational, minEqualDivision: Denominator) => ContourElement<PitchValueEnvelopeScale> =
    (
        [ equalDivisionStep, equalDivision ]: Rational,
        minEqualDivision: Denominator,
    ): ContourElement<PitchValueEnvelopeScale> =>
        as.ContourElement<PitchValueEnvelopeScale>([
            as.number(equalDivisionStep),
            1,
            1,
            as.number(difference(equalDivision, minEqualDivision || 1)),
        ])

const computeFallingContourElement:
    (equalDivisionStep: Rational, minEqualDivision: Denominator) => ContourElement<PitchValueEnvelopeScale> =
    (
        [ equalDivisionStep, equalDivision ]: Rational,
        minEqualDivision: Denominator,
    ): ContourElement<PitchValueEnvelopeScale> => {
        const numericEqualDivisionStep: number = as.number(equalDivisionStep)
        const numericEqualDivision: number = as.number(equalDivision)

        return as.ContourElement<PitchValueEnvelopeScale>([
            numericEqualDivisionStep,
            quotient(difference(numericEqualDivision, numericEqualDivisionStep), numericEqualDivision),
            1 / numericEqualDivision,
            as.number(difference(equalDivision, minEqualDivision || 1)),
        ])
    }

export {
    computeContourElement,
    computeFallingContourElement,
}
