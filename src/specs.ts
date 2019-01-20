import {
    SpecDataFor,
    SpecPropertyType,
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import {
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_PITCH_SCALAR,
    OMNIZONK_WINDOW,
} from './constants'
import { OmnizonkSpec, OmnizonkSpecAttributes } from './types'

const initial: OmnizonkSpec = {
    [ StandardSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: OMNIZONK_PITCH_SCALAR,
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
        specPropertyType: SpecPropertyType.RANGED,
    },
    minEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    window: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
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
