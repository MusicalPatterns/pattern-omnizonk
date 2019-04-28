import { StandardSpec } from '@musical-patterns/spec'
import {
    OMNIZONK_INITIAL_BASIS_FREQUENCY,
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    OMNIZONK_INITIAL_PERIOD,
} from './constants'
import { OmnizonkSpecs } from './types'

const initialSpecs: OmnizonkSpecs = {
    [ StandardSpec.BASIS_FREQUENCY ]: OMNIZONK_INITIAL_BASIS_FREQUENCY,
    maxEqualDivision: OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    maxFilteredEqualDivision: OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    period: OMNIZONK_INITIAL_PERIOD,
}

export {
    initialSpecs,
}
