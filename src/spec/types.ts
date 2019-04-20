import { Configurations, RangedConfiguration, StandardSpecs } from '@musical-patterns/spec'
import { Denominator, Frequency, Logarithm } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends StandardSpecs {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Logarithm<Frequency>,
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
