import { apply, Denominator, from, INCLUSIVE, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../../spec'

const buildEqualDivisions: (spec: OmnizonkSpec) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpec): Denominator[] =>
        zeroAndPositiveIntegers.slice(
            from.Denominator(minEqualDivision),
            apply.Translation(from.Denominator(maxEqualDivision), INCLUSIVE),
        )
            .map(to.Denominator)

export {
    buildEqualDivisions,
}
