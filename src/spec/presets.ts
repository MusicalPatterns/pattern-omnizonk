import { Preset, StandardSpec } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    FALLING_PRESET_MAX_EQUAL_DIVISION,
    FALLING_PRESET_MIN_EQUAL_DIVISION,
    PEEPHOLE_HZ_PHYSICALIZATION,
    PEEPHOLE_PERIOD,
    PEEPHOLE_PRESET_EQUAL_DIVISION,
    PORTAL_PRESET_HZ_PHYSICALIZATION,
    PORTAL_PRESET_MAX_EQUAL_DIVISION,
    PORTAL_PRESET_PERIOD,
    SCREEN_MAX_FILTERED_EQUAL_DIVISION,
    SCREEN_PRESET_MAX_EQUAL_DIVISION,
    SCREEN_PRESET_PERIOD,
    WASH_PRESET_HZ_PHYSICALIZATION,
    WASH_PRESET_MAX_EQUAL_DIVISION,
    WOBBLE_PRESET_EQUAL_DIVISION,
    WOBBLE_PRESET_HZ_PHYSICALIZATION,
    WOBBLE_PRESET_PERIOD,
    ZONK_PRESET_EQUAL_DIVISION,
} from './constants'
import { initialSpecs } from './initials'
import { OmnizonkSpecs } from './types'

const presets: ObjectOf<Preset<OmnizonkSpecs>> = {
    falling: {
        order: 6,
        specs: {
            ...initialSpecs,
            falling: true,
            maxEqualDivision: FALLING_PRESET_MAX_EQUAL_DIVISION,
            minEqualDivision: FALLING_PRESET_MIN_EQUAL_DIVISION,
        },
    },
    peephole: {
        order: 3,
        specs: {
            ...initialSpecs,
            maxEqualDivision: PEEPHOLE_PRESET_EQUAL_DIVISION,
            minEqualDivision: PEEPHOLE_PRESET_EQUAL_DIVISION,
            period: PEEPHOLE_PERIOD,
            [ StandardSpec.HZ_PHYSICALIZATION ]: PEEPHOLE_HZ_PHYSICALIZATION,
        },
    },
    portal: {
        order: 4,
        specs: {
            ...initialSpecs,
            maxEqualDivision: PORTAL_PRESET_MAX_EQUAL_DIVISION,
            period: PORTAL_PRESET_PERIOD,
            [ StandardSpec.HZ_PHYSICALIZATION ]: PORTAL_PRESET_HZ_PHYSICALIZATION,
        },
    },
    screen: {
        order: 1,
        specs: {
            ...initialSpecs,
            maxEqualDivision: SCREEN_PRESET_MAX_EQUAL_DIVISION,
            maxFilteredEqualDivision: SCREEN_MAX_FILTERED_EQUAL_DIVISION,
            period: SCREEN_PRESET_PERIOD,
        },
    },
    wash: {
        order: 5,
        specs: {
            ...initialSpecs,
            maxEqualDivision: WASH_PRESET_MAX_EQUAL_DIVISION,
            [ StandardSpec.HZ_PHYSICALIZATION ]: WASH_PRESET_HZ_PHYSICALIZATION,
        },
    },
    wobble: {
        order: 2,
        specs: {
            ...initialSpecs,
            maxEqualDivision: WOBBLE_PRESET_EQUAL_DIVISION,
            minEqualDivision: WOBBLE_PRESET_EQUAL_DIVISION,
            period: WOBBLE_PRESET_PERIOD,
            [ StandardSpec.HZ_PHYSICALIZATION ]: WOBBLE_PRESET_HZ_PHYSICALIZATION,
        },
    },
    zonk: {
        order: 0,
        specs: {
            ...initialSpecs,
            maxEqualDivision: ZONK_PRESET_EQUAL_DIVISION,
            minEqualDivision: ZONK_PRESET_EQUAL_DIVISION,
        },
    },
}

export {
    presets,
}
