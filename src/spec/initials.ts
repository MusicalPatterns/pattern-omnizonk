import { StandardSpec } from '@musical-patterns/spec'
import {
    OMNIZONK_INITIAL_BASE_FREQUENCY,
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    OMNIZONK_INITIAL_WINDOW,
} from './constants'
import { OmnizonkSpecs } from './types'

const initialSpecs: OmnizonkSpecs = {
    [ StandardSpec.BASE_FREQUENCY ]: OMNIZONK_INITIAL_BASE_FREQUENCY,
    maxEqualDivision: OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    maxFilteredEqualDivision: OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    window: OMNIZONK_INITIAL_WINDOW,
}

export {
    initialSpecs,
}
