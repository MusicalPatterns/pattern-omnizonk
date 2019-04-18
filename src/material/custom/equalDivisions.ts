import { apply, Denominator, from, to, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        ZERO_AND_POSITIVE_INTEGERS.slice(
            from.Denominator(minEqualDivision),
            apply.Translation(from.Denominator(maxEqualDivision), to.Translation(1)),
        )
            .map(to.Denominator)

export {
    computeEqualDivisions,
}
