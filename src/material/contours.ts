import { PitchScale } from '@musical-patterns/material'
import { as, ContourElement, Denominator, difference, Rational } from '@musical-patterns/utilities'

const computeContourElement: (rational: Rational, minEqualDivision: Denominator) => ContourElement<PitchScale> =
    ([ equalDivisionStep, equalDivision ]: Rational, minEqualDivision: Denominator): ContourElement<PitchScale> => {
        const pitch: number = as.number(equalDivisionStep)
        const scale: number = as.number(difference(equalDivision, minEqualDivision || 1))

        return as.ContourElement<PitchScale>([ pitch, scale ])
    }

export {
    computeContourElement,
}
