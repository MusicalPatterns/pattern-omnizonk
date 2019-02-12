import { StandardSpecProperties } from '@musical-patterns/pattern'
import { OmnizonkSpec } from '../types'
import {
    OMNIZONK_INITIAL_BASE_FREQUENCY,
    OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    OMNIZONK_INITIAL_WINDOW,
} from './constants'

const initial: OmnizonkSpec = {
    [ StandardSpecProperties.BASE_FREQUENCY ]: OMNIZONK_INITIAL_BASE_FREQUENCY,
    maxEqualDivision: OMNIZONK_INITIAL_MAX_EQUAL_DIVISION,
    maxFilteredEqualDivision: OMNIZONK_INITIAL_MAX_FILTERED_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_INITIAL_MIN_EQUAL_DIVISION,
    window: OMNIZONK_INITIAL_WINDOW,
}

export {
    initial,
}
