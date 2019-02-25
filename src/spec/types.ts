import { RangedSpecPropertyAttributes, SpecAttributesFor, StandardSpec } from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpec extends StandardSpec {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkSpecAttributes extends SpecAttributesFor<OmnizonkSpec> {
    maxEqualDivision: RangedSpecPropertyAttributes,
    maxFilteredEqualDivision: RangedSpecPropertyAttributes,
    minEqualDivision: RangedSpecPropertyAttributes,
    window: RangedSpecPropertyAttributes,
}

export {
    OmnizonkSpec,
    OmnizonkSpecAttributes,
}
