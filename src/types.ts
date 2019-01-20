import {
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
} from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpec extends StandardSpec {
    maxEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkSpecAttributes extends StandardSpecAttributes {
    maxEqualDivision: RangedSpecPropertyAttributes,
    minEqualDivision: RangedSpecPropertyAttributes,
    window: RangedSpecPropertyAttributes,
}

export {
    OmnizonkSpec,
    OmnizonkSpecAttributes,
}
