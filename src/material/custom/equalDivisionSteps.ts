import { as, Denominator, Fraction, Integer, range } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'
import { computeEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const computeStepsForEqualDivision: (equalDivision: Denominator, specs: OmnizonkSpecs) => Fraction[] =
    (equalDivision: Denominator, specs: OmnizonkSpecs): Fraction[] =>
        range(equalDivision)
            .map((equalDivisionStep: Integer): Fraction => [ as.Numerator(equalDivisionStep), equalDivision ])
            .filter((fraction: Fraction) => filterEqualDivisionSteps(fraction, specs))

const computeEqualDivisionSteps: (specs: OmnizonkSpecs) => Fraction[] =
    (specs: OmnizonkSpecs): Fraction[] => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)

        return equalDivisions.reduce(
            (accumulatingEntities: Fraction[], equalDivision: Denominator): Fraction[] =>
                accumulatingEntities.concat(computeStepsForEqualDivision(equalDivision, specs)),
            [],
        )
    }

export {
    computeEqualDivisionSteps,
}
