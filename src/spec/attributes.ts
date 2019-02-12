import { SpecPropertyType, standardSpecAttributes } from '@musical-patterns/pattern'
import { from, Units } from '@musical-patterns/utilities'
import { OmnizonkSpecAttributes } from '../types'
import { MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES } from './constants'

const attributes: OmnizonkSpecAttributes = {
    ...standardSpecAttributes,
    maxEqualDivision: {
        constraint: {
            integer: true,
            max: from.Denominator(MAXIMUM_MAX_EQUAL_DIVISION_BEFORE_OMNIZONK_CRASHES),
            min: 1,
        },
        description: 'the maximum count of equally-sized pitch intervals the window will be divided into',
        formattedName: 'maximum equal division',
        order: 2,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.EQUAL_DIVISION,
    },
    maxFilteredEqualDivision: {
        constraint: {
            integer: true,
            min: 0,
        },
        description: 'filter out the intervals higher equal divisions share with lower ones',
        formattedName: 'maximum filtered equal division',
        order: 4,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.EQUAL_DIVISION,
    },
    minEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: 'the minimum count of equally-sized pitch intervals the window will be divided into',
        formattedName: 'minimum equal division',
        order: 1,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.EQUAL_DIVISION,
    },
    window: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        description: 'harmonic interval to divide equally',
        order: 3,
        specPropertyType: SpecPropertyType.RANGED,
    },
}

export {
    attributes,
}
