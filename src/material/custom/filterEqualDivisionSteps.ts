import {
    computeLowestTerms,
    Denominator,
    Fraction,
    from,
    INITIAL,
    POSITIVE_INTEGERS,
    slice,
    to,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const filterEqualDivisionSteps: (fraction: Fraction, specs: OmnizonkSpecs) => boolean =
    (fraction: Fraction, specs: OmnizonkSpecs): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            slice(POSITIVE_INTEGERS, INITIAL, to.Ordinal(from.Denominator(specs.maxFilteredEqualDivision)))
                .map(to.Denominator)

        filteredEqualDivisions.forEach((filteredEqualDivision: Denominator) => {
            if (computeLowestTerms(fraction)[ 1 ] === filteredEqualDivision) {
                pass = false
            }
        })

        return pass
    }

export {
    filterEqualDivisionSteps,
}
