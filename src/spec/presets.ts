import { Preset, StandardSpec } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import {
    PEEPHOLE_BASIS_FREQUENCY,
    PEEPHOLE_PERIOD,
    PEEPHOLE_PRESET_EQUAL_DIVISION,
    PORTAL_PRESET_BASIS_FREQUENCY,
    PORTAL_PRESET_MAX_EQUAL_DIVISION,
    PORTAL_PRESET_PERIOD,
    SCREEN_MAX_FILTERED_EQUAL_DIVISION,
    SCREEN_PRESET_MAX_EQUAL_DIVISION,
    SCREEN_PRESET_PERIOD,
    WASH_PRESET_BASIS_FREQUENCY,
    WASH_PRESET_MAX_EQUAL_DIVISION,
    WOBBLE_PRESET_BASIS_FREQUENCY,
    WOBBLE_PRESET_EQUAL_DIVISION,
    WOBBLE_PRESET_PERIOD,
    ZONK_PRESET_EQUAL_DIVISION,
} from './constants'
import { initialSpecs } from './initials'
import { OmnizonkSpecs } from './types'

const presets: ObjectOf<Preset<OmnizonkSpecs>> = {
    peephole: {
        description: '',
        order: 3,
        specs: {
            ...initialSpecs,
            maxEqualDivision: PEEPHOLE_PRESET_EQUAL_DIVISION,
            minEqualDivision: PEEPHOLE_PRESET_EQUAL_DIVISION,
            period: PEEPHOLE_PERIOD,
            [ StandardSpec.BASIS_FREQUENCY ]: PEEPHOLE_BASIS_FREQUENCY,
        },
    },
    portal: {
        description: '',
        order: 4,
        specs: {
            ...initialSpecs,
            maxEqualDivision: PORTAL_PRESET_MAX_EQUAL_DIVISION,
            period: PORTAL_PRESET_PERIOD,
            [ StandardSpec.BASIS_FREQUENCY ]: PORTAL_PRESET_BASIS_FREQUENCY,
        },
    },
    screen: {
        description: '',
        order: 1,
        specs: {
            ...initialSpecs,
            maxEqualDivision: SCREEN_PRESET_MAX_EQUAL_DIVISION,
            maxFilteredEqualDivision: SCREEN_MAX_FILTERED_EQUAL_DIVISION,
            period: SCREEN_PRESET_PERIOD,
        },
    },
    wash: {
        description: '',
        order: 5,
        specs: {
            ...initialSpecs,
            maxEqualDivision: WASH_PRESET_MAX_EQUAL_DIVISION,
            [ StandardSpec.BASIS_FREQUENCY ]: WASH_PRESET_BASIS_FREQUENCY,
        },
    },
    wobble: {
        description: '',
        order: 2,
        specs: {
            ...initialSpecs,
            maxEqualDivision: WOBBLE_PRESET_EQUAL_DIVISION,
            minEqualDivision: WOBBLE_PRESET_EQUAL_DIVISION,
            period: WOBBLE_PRESET_PERIOD,
            [ StandardSpec.BASIS_FREQUENCY ]: WOBBLE_PRESET_BASIS_FREQUENCY,
        },
    },
    zonk: {
        description: '',
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
