import { Attributes, RangedPropertyAttributes, Spec } from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpec extends Spec {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkAttributes extends Attributes<OmnizonkSpec> {
    maxEqualDivision: RangedPropertyAttributes,
    maxFilteredEqualDivision: RangedPropertyAttributes,
    minEqualDivision: RangedPropertyAttributes,
    window: RangedPropertyAttributes,
}

export {
    OmnizonkSpec,
    OmnizonkAttributes,
}
