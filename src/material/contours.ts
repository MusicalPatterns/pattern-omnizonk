import { PitchScale } from '@musical-patterns/material'
import { as, ContourElement, Denominator, difference, Fraction } from '@musical-patterns/utilities'

const computeContourElement: (fraction: Fraction, minEqualDivision: Denominator) => ContourElement<PitchScale> =
    ([ equalDivisionStep, equalDivision ]: Fraction, minEqualDivision: Denominator): ContourElement<PitchScale> => {
        const pitch: number = as.number(equalDivisionStep)
        const scale: number = as.number(difference(equalDivision, minEqualDivision))

        return as.ContourElement<PitchScale>([ pitch, scale ])
    }

export {
    computeContourElement,
}
