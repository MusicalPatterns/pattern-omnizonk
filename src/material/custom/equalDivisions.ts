import { apply, Denominator, from, INCLUSIVE, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        zeroAndPositiveIntegers.slice(
            from.Denominator(minEqualDivision),
            apply.Translation(from.Denominator(maxEqualDivision), INCLUSIVE),
        )
            .map(to.Denominator)

export {
    computeEqualDivisions,
}
