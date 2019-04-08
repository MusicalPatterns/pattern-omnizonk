import { PitchScale } from '@musical-patterns/material'
import { ContourElement, Denominator, difference, Fraction, from, to } from '@musical-patterns/utilities'

const computeContourElement: (fraction: Fraction, minEqualDivision: Denominator) => ContourElement<PitchScale> =
    ([ equalDivisionStep, equalDivision ]: Fraction, minEqualDivision: Denominator): ContourElement<PitchScale> => {
        const pitch: number = to.Ordinal(from.Numerator(equalDivisionStep))
        const scale: number = to.Ordinal(from.Denominator(difference(equalDivision, minEqualDivision)))

        return to.ContourElement<PitchScale>([ pitch, scale ])
    }

export {
    computeContourElement,
}
