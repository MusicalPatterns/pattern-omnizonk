import { InputType, standardConfigurations } from '@musical-patterns/spec'
import { as, Units } from '@musical-patterns/utilities'
import { MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES } from './constants'
import { OmnizonkConfigurations } from './types'

const configurations: OmnizonkConfigurations = {
    ...standardConfigurations,
    maxEqualDivision: {
        constraint: {
            integer: true,
            max: as.number(MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES),
            min: 1,
        },
        description: 'the maximum count of equally-sized pitch intervals the window will be divided into',
        formattedName: 'maximum equal division',
        inputType: InputType.RANGED,
        order: 2,
        units: Units.EQUAL_DIVISION,
    },
    maxFilteredEqualDivision: {
        constraint: {
            integer: true,
            min: 0,
        },
        description: 'filter out the intervals higher equal divisions share with lower ones',
        formattedName: 'maximum filtered equal division',
        inputType: InputType.RANGED,
        order: 4,
        units: Units.EQUAL_DIVISION,
    },
    minEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: 'the minimum count of equally-sized pitch intervals the window will be divided into',
        formattedName: 'minimum equal division',
        inputType: InputType.RANGED,
        order: 1,
        units: Units.EQUAL_DIVISION,
    },
    window: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        description: 'harmonic interval to divide equally',
        inputType: InputType.RANGED,
        order: 3,
    },
}

export {
    configurations,
}
