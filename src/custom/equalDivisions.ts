import { apply, Denominator, from, INCLUSIVE, numbers, to } from '@musical-patterns/utilities'
import { OmnizonkPatternSpec } from '../types'

const buildEqualDivisions: (patternSpec: OmnizonkPatternSpec) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkPatternSpec): Denominator[] =>
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
