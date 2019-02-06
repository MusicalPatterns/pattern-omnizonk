import { apply, Denominator, from, INCLUSIVE, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const buildEqualDivisions: (spec: OmnizonkSpec) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpec): Denominator[] =>
        zeroAndPositiveIntegers.slice(
            from.FractionalPart(minEqualDivision),
            apply.Translation(from.FractionalPart(maxEqualDivision), INCLUSIVE),
        )
            .map(to.Denominator)

export {
    buildEqualDivisions,
}
