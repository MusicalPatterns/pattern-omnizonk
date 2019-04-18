import { Configurations, RangedConfiguration, StandardSpecs } from '@musical-patterns/spec'
import { Base, Denominator, Frequency } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends StandardSpecs {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base<Frequency>,
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
