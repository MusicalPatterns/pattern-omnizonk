import {
    Denominator,
    Fraction,
    from,
    INITIAL,
    Integer,
    slice,
    to,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'
import { computeEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const computeStepsForEqualDivision: (equalDivision: Denominator, specs: OmnizonkSpecs) => Fraction[] =
    (equalDivision: Denominator, specs: OmnizonkSpecs): Fraction[] =>
        slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
            .map((equalDivisionStep: Integer): Fraction => [ to.Numerator(equalDivisionStep), equalDivision ])
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
