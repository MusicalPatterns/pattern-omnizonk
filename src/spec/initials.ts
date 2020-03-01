import { StandardSpec } from '@musical-patterns/spec'
import {
    OMNIZONK_INITIAL_HZ_PHYSICALIZATION,
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_PERIOD,
} from './constants'
import { OmnizonkSpecs } from './types'

const initialSpecs: OmnizonkSpecs = {
    [ StandardSpec.HZ_PHYSICALIZATION ]: OMNIZONK_INITIAL_HZ_PHYSICALIZATION,
    falling: false,
    maxEqualDivision: OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    maxFilteredEqualDivision: undefined,
    minEqualDivision: undefined,
    period: OMNIZONK_INITIAL_PERIOD,
}

export {
    initialSpecs,
}
