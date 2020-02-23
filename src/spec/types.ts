import { Configurations, RangedConfiguration, Specs } from '@musical-patterns/spec'
import { Denominator, Frequency, Logarithm, Maybe } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends Specs {
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Maybe<Denominator>,
    minEqualDivision: Maybe<Denominator>,
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
