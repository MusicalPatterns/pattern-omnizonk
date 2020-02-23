import { as, Denominator, Integer, range, Rational } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'
import { computeEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const computeStepsForEqualDivision: (equalDivision: Denominator, specs: OmnizonkSpecs) => Rational[] =
    (equalDivision: Denominator, specs: OmnizonkSpecs): Rational[] =>
        range(equalDivision)
            .map((equalDivisionStep: Integer): Rational => [ as.Numerator(equalDivisionStep), equalDivision ])
            .filter((rational: Rational): boolean => filterEqualDivisionSteps(rational, specs))

const computeEqualDivisionSteps: (specs: OmnizonkSpecs) => Rational[] =
    (specs: OmnizonkSpecs): Rational[] => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)

        return equalDivisions.reduce(
            (accumulatingEntities: Rational[], equalDivision: Denominator): Rational[] =>
                accumulatingEntities.concat(computeStepsForEqualDivision(equalDivision, specs)),
            [],
        )
    }

export {
    computeEqualDivisionSteps,
}
