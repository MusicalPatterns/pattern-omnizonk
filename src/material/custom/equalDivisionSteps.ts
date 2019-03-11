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
import { OmnizonkSpec } from '../../spec'
import { computeEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const computeStepsForEqualDivision: (equalDivision: Denominator, spec: OmnizonkSpec) => Fraction[] =
    (equalDivision: Denominator, spec: OmnizonkSpec): Fraction[] =>
        slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
            .map((equalDivisionStep: Integer): Fraction => [ to.Numerator(equalDivisionStep), equalDivision ])
            .filter((fraction: Fraction) => filterEqualDivisionSteps(fraction, spec))

const computeEqualDivisionSteps: (spec: OmnizonkSpec) => Fraction[] =
    (spec: OmnizonkSpec): Fraction[] => {
        const equalDivisions: Denominator[] = computeEqualDivisions(spec)

        return equalDivisions.reduce(
            (accumulatingEntities: Fraction[], equalDivision: Denominator): Fraction[] =>
                accumulatingEntities.concat(computeStepsForEqualDivision(equalDivision, spec)),
            [],
        )
    }

export {
    computeEqualDivisionSteps,
}
