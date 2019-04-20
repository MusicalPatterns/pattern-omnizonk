import { PitchScale } from '@musical-patterns/material'
import { as, ContourElement, Denominator, difference, Fraction, notAs } from '@musical-patterns/utilities'

const computeContourElement: (fraction: Fraction, minEqualDivision: Denominator) => ContourElement<PitchScale> =
    ([ equalDivisionStep, equalDivision ]: Fraction, minEqualDivision: Denominator): ContourElement<PitchScale> => {
        const pitch: number = notAs.Numerator(equalDivisionStep)
        const scale: number = notAs.Denominator(difference(equalDivision, minEqualDivision))

        return as.ContourElement<PitchScale>([ pitch, scale ])
    }

export {
    computeContourElement,
}
