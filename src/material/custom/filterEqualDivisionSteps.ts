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
import { OmnizonkSpec } from '../../spec'

const filterEqualDivisionSteps: (fraction: Fraction, spec: OmnizonkSpec) => boolean =
    (fraction: Fraction, spec: OmnizonkSpec): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            slice(positiveIntegers, INITIAL, to.Ordinal(from.Denominator(spec.maxFilteredEqualDivision)))
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
