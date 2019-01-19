import {
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
} from '@musical-patterns/pattern'
import { Denominator, Scalar } from '@musical-patterns/utilities'

interface OmnizonkPatternSpec extends StandardPatternSpec {
    maxEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Scalar,
}

interface OmnizonkPatternSpecAttributes extends StandardPatternSpecAttributes {
    maxEqualDivision: RangedPatternSpecPropertyAttributes,
    minEqualDivision: RangedPatternSpecPropertyAttributes,
    window: RangedPatternSpecPropertyAttributes,
}

export {
    OmnizonkPatternSpec,
    OmnizonkPatternSpecAttributes,
}
