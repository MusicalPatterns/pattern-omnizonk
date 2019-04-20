import { as, Denominator, notAs, use, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        ZERO_AND_POSITIVE_INTEGERS.slice(
            notAs.Denominator(minEqualDivision),
            use.Translation(notAs.Denominator(maxEqualDivision), as.Translation(1)),
        )
            .map(as.Denominator)

export {
    computeEqualDivisions,
}
