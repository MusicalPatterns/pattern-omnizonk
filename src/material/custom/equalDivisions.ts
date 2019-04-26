import { as, Denominator, INCREMENT,  use, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        ZERO_AND_POSITIVE_INTEGERS.slice(
            as.number(minEqualDivision),
            use.Cardinal(as.number(maxEqualDivision), INCREMENT),
        )
            .map(as.Denominator)

export {
    computeEqualDivisions,
}
