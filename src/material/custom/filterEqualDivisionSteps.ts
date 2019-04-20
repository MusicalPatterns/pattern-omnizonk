import {
    as,
    computeLowestTerms,
    Denominator,
    Fraction,
    INITIAL,
    notAs,
    POSITIVE_INTEGERS,
    slice,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const filterEqualDivisionSteps: (fraction: Fraction, specs: OmnizonkSpecs) => boolean =
    (fraction: Fraction, specs: OmnizonkSpecs): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            slice(POSITIVE_INTEGERS, INITIAL, as.Ordinal(notAs.Denominator(specs.maxFilteredEqualDivision)))
                .map(as.Denominator)

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
