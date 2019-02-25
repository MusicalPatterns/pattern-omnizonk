import { SpecValidationFunction, SpecValidationResults } from '@musical-patterns/pattern'
import { OmnizonkSpec } from './types'

const validationFunction: SpecValidationFunction<OmnizonkSpec> =
    (spec: OmnizonkSpec): SpecValidationResults<OmnizonkSpec> => {
        if (spec.maxEqualDivision < spec.minEqualDivision) {
            return {
                maxEqualDivision: 'cannot be less than the minimum equal division',
                minEqualDivision: 'cannot be more than the maximum equal division',
            }
        }

        if (spec.maxFilteredEqualDivision >= spec.maxEqualDivision) {
            return {
                maxEqualDivision: 'does not make sense to filter out more than the max equal division',
                maxFilteredEqualDivision: 'does not make sense to filter out more than the max equal division',
            }
        }

        return undefined
    }

export {
    validationFunction,
}
