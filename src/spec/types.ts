import { Configurations, RangedConfiguration, StandardSpecs } from '@musical-patterns/spec'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends StandardSpecs {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkConfigurations extends Configurations<OmnizonkSpecs> {
    maxEqualDivision: RangedConfiguration,
    maxFilteredEqualDivision: RangedConfiguration,
    minEqualDivision: RangedConfiguration,
    window: RangedConfiguration,
}

export {
    OmnizonkSpecs,
    OmnizonkConfigurations,
}
