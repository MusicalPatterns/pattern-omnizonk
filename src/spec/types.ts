import { Configurations, RangedConfiguration, Specs } from '@musical-patterns/spec'
import { Denominator, Frequency, Logarithm } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends Specs {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Denominator,
    minEqualDivision: Denominator,
    period: Logarithm<Frequency>,
}

interface OmnizonkConfigurations extends Configurations<OmnizonkSpecs> {
    maxEqualDivision: RangedConfiguration,
    maxFilteredEqualDivision: RangedConfiguration,
    minEqualDivision: RangedConfiguration,
    period: RangedConfiguration,
}

export {
    OmnizonkSpecs,
    OmnizonkConfigurations,
}
