import { as, computeLowestTerms, Denominator, Fraction, INCREMENT, ONE, range, use } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const filterEqualDivisionSteps: (fraction: Fraction, specs: OmnizonkSpecs) => boolean =
    (fraction: Fraction, specs: OmnizonkSpecs): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            range(ONE, use.Cardinal(specs.maxFilteredEqualDivision, INCREMENT))
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
