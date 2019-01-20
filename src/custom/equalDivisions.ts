import { apply, Denominator, from, INCLUSIVE, numbers, to } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const buildEqualDivisions: (spec: OmnizonkSpec) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpec): Denominator[] =>
        numbers
            .map((n: number): number => n - 1)
            .slice(
                from.FractionalPart(minEqualDivision),
                apply.Offset(from.FractionalPart(maxEqualDivision), INCLUSIVE),
            )
            .map(to.Denominator)

export {
    buildEqualDivisions,
}
