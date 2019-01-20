import {
    PatternSpecDataFor,
    PatternSpecPropertyType,
    PatternSpecValidationFunctionFor,
    PatternSpecValidationResultsFor,
    standardPatternSpecAttributes,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import {
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_PITCH_SCALAR,
    OMNIZONK_WINDOW,
} from './constants'
import { OmnizonkPatternSpec, OmnizonkPatternSpecAttributes } from './types'

const initial: OmnizonkPatternSpec = {
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: OMNIZONK_PITCH_SCALAR,
    maxEqualDivision: OMNIZONK_MAX_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_MIN_EQUAL_DIVISION,
    window: OMNIZONK_WINDOW,
}

const attributes: OmnizonkPatternSpecAttributes = {
    ...standardPatternSpecAttributes,
    maxEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    minEqualDivision: {
        constraint: {
            integer: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    window: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

const validationFunction: PatternSpecValidationFunctionFor<OmnizonkPatternSpec> =
    (patternSpec: OmnizonkPatternSpec): PatternSpecValidationResultsFor<OmnizonkPatternSpec> => {
        if (patternSpec.maxEqualDivision < patternSpec.minEqualDivision) {
            return {
                maxEqualDivision: 'cannot be less than the minimum equal division',
                minEqualDivision: 'cannot be more than the maximum equal division',
            }
        }

        return undefined
    }

const specData: PatternSpecDataFor<OmnizonkPatternSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
