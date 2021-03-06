import { as, computeLowestTerms, Denominator, INCREMENT, ONE, range, Rational, use } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const filterEqualDivisionSteps: (equalDivisionStep: Rational, specs: OmnizonkSpecs) => boolean =
    (equalDivisionStep: Rational, specs: OmnizonkSpecs): boolean => {
        let pass: boolean = true

        const filteredEqualDivisions: Denominator[] =
            range(ONE, use.Cardinal(specs.maxFilteredEqualDivision || 0, INCREMENT))
                .map(as.Denominator)

        filteredEqualDivisions.forEach((filteredEqualDivision: Denominator): void => {
            if (computeLowestTerms(equalDivisionStep)[ 1 ] === filteredEqualDivision) {
                pass = false
            }
        })

        return pass
    }

export {
    filterEqualDivisionSteps,
}
