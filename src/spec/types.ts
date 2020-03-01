import { Configurations, RangedConfiguration, Specs, ToggledConfiguration } from '@musical-patterns/spec'
import { Denominator, Frequency, Logarithm, Maybe } from '@musical-patterns/utilities'

interface OmnizonkSpecs extends Specs {
    falling: boolean,
    maxEqualDivision: Denominator,
    maxFilteredEqualDivision: Maybe<Denominator>,
    minEqualDivision: Maybe<Denominator>,
    period: Logarithm<Frequency>,
}

interface OmnizonkConfigurations extends Configurations<OmnizonkSpecs> {
    falling: ToggledConfiguration,
    maxEqualDivision: RangedConfiguration,
    maxFilteredEqualDivision: RangedConfiguration,
    minEqualDivision: RangedConfiguration,
    period: RangedConfiguration,
}

export {
    OmnizonkSpecs,
    OmnizonkConfigurations,
}
