import { apply, Denominator, from, INCLUSIVE, to, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        ZERO_AND_POSITIVE_INTEGERS.slice(
            from.Denominator(minEqualDivision),
            apply.Translation(from.Denominator(maxEqualDivision), INCLUSIVE),
        )
            .map(to.Denominator)

export {
    computeEqualDivisions,
}
