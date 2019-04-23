import { as, Denominator, INCREMENT, notAs, use, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        ZERO_AND_POSITIVE_INTEGERS.slice(
            notAs.Denominator(minEqualDivision),
            use.Cardinal(notAs.Denominator(maxEqualDivision), INCREMENT),
        )
            .map(as.Denominator)

export {
    computeEqualDivisions,
}
