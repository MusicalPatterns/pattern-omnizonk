import { RangedSpecPropertyAttributes, Spec, SpecAttributes } from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpec extends Spec {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkSpecAttributes extends SpecAttributes<OmnizonkSpec> {
    maxEqualDivision: RangedSpecPropertyAttributes,
    maxFilteredEqualDivision: RangedSpecPropertyAttributes,
    minEqualDivision: RangedSpecPropertyAttributes,
    window: RangedSpecPropertyAttributes,
}

export {
    OmnizonkSpec,
    OmnizonkSpecAttributes,
}
