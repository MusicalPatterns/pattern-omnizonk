import {
    Denominator,
    Fraction,
    from,
    INITIAL,
    lowestTerms,
    positiveIntegers,
    slice,
    to,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const filterEqualDivisionSteps: (fraction: Fraction, specs: OmnizonkSpecs) => boolean =
    (fraction: Fraction, specs: OmnizonkSpecs): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            slice(positiveIntegers, INITIAL, to.Ordinal(from.Denominator(specs.maxFilteredEqualDivision)))
                .map(to.Denominator)

        filteredEqualDivisions.forEach((filteredEqualDivision: Denominator) => {
            if (lowestTerms(fraction)[ 1 ] === filteredEqualDivision) {
                pass = false
            }
        })

        return pass
    }

export {
    filterEqualDivisionSteps,
}
