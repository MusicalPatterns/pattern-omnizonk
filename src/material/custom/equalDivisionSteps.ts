import {
    Denominator,
    from,
    INITIAL,
    Integer,
    Ratio,
    slice,
    to,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../../spec'
import { buildEqualDivisions } from './equalDivisions'
import { filterEqualDivisionSteps } from './filterEqualDivisionSteps'

const buildStepsForEqualDivision: (equalDivision: Denominator, spec: OmnizonkSpec) => Ratio[] =
    (equalDivision: Denominator, spec: OmnizonkSpec): Ratio[] =>
        slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
            .map((equalDivisionStep: Integer): Ratio => [ to.Numerator(equalDivisionStep), equalDivision ])
            .filter((ratio: Ratio) => filterEqualDivisionSteps(ratio, spec))

const buildEqualDivisionSteps: (spec: OmnizonkSpec) => Ratio[] =
    (spec: OmnizonkSpec): Ratio[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        return equalDivisions.reduce(
            (accumulatingEntities: Ratio[], equalDivision: Denominator): Ratio[] =>
                accumulatingEntities.concat(buildStepsForEqualDivision(equalDivision, spec)),
            [],
        )
    }

export {
    buildEqualDivisionSteps,
}
