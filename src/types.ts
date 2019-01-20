import {
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
} from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkPatternSpec extends StandardPatternSpec {
    maxEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
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
