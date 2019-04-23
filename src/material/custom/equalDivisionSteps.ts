import {
    as,
    Denominator,
    Fraction,
    INITIAL,
    Integer,
    notAs,
    slice,
    ZERO_AND_POSITIVE_INTEGERS,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'
import { computeEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const computeStepsForEqualDivision: (equalDivision: Denominator, specs: OmnizonkSpecs) => Fraction[] =
    (equalDivision: Denominator, specs: OmnizonkSpecs): Fraction[] =>
        slice(ZERO_AND_POSITIVE_INTEGERS, INITIAL, as.Ordinal<Integer[]>(notAs.Denominator(equalDivision)))
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
