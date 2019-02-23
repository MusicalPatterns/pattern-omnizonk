import {
    Denominator,
    from,
    INITIAL,
    lowestTerms,
    positiveIntegers,
    Ratio,
    slice,
    to,
} from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../../types'

const filterEqualDivisionSteps: (ratio: Ratio, spec: OmnizonkSpec) => boolean =
    (ratio: Ratio, spec: OmnizonkSpec): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            slice(positiveIntegers, INITIAL, to.Ordinal(from.Denominator(spec.maxFilteredEqualDivision)))
                .map(to.Denominator)

        filteredEqualDivisions.forEach((filteredEqualDivision: Denominator) => {
            if (lowestTerms(ratio)[ 1 ] === filteredEqualDivision) {
                pass = false
            }
        })

        return pass
    }

export {
    filterEqualDivisionSteps,
}
