import { PatternSpec, PatternSpecAttributes, RangedPatternSpecPropertyAttributes } from '@musical-patterns/pattern'
import { Denominator, Scalar } from '@musical-patterns/utilities'

interface OmnizonkPatternSpec extends PatternSpec {
    maxEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Scalar,
}

interface OmnizonkPatternSpecAttributes extends PatternSpecAttributes {
    maxEqualDivision: RangedPatternSpecPropertyAttributes,
    minEqualDivision: RangedPatternSpecPropertyAttributes,
    window: RangedPatternSpecPropertyAttributes,
}

export {
    OmnizonkPatternSpec,
    OmnizonkPatternSpecAttributes,
}
