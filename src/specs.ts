import {
    SpecDataFor,
    SpecPropertyType,
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { to, Units } from '@musical-patterns/utilities'
import {
    OMNIZONK_BASE_FREQUENCY,
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_WINDOW,
} from './constants'
import { OmnizonkSpec, OmnizonkSpecAttributes } from './types'

const initial: OmnizonkSpec = {
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.BASE_FREQUENCY ]: OMNIZONK_BASE_FREQUENCY,
    maxEqualDivision: OMNIZONK_MAX_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_MIN_EQUAL_DIVISION,
    window: OMNIZONK_WINDOW,
}

const attributes: OmnizonkSpecAttributes = {
    ...standardSpecAttributes,
    maxEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: 'the maximum count of equally-sized pitch intervals the window will be divided into',
        formattedName: 'maximum equal division',
        order: 2,
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

const validationFunction: SpecValidationFunctionFor<OmnizonkSpec> =
    (spec: OmnizonkSpec): SpecValidationResultsFor<OmnizonkSpec> => {
        if (spec.maxEqualDivision < spec.minEqualDivision) {
            return {
                maxEqualDivision: 'cannot be less than the minimum equal division',
                minEqualDivision: 'cannot be more than the maximum equal division',
            }
        }

        return undefined
    }

const specData: SpecDataFor<OmnizonkSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
