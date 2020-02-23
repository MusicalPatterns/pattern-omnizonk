import { ComputeValidations, Validations } from '@musical-patterns/spec'
import { isUndefined } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from './types'

const computeValidations: ComputeValidations<OmnizonkSpecs> =
    ({ maxEqualDivision, minEqualDivision, maxFilteredEqualDivision }: OmnizonkSpecs): Validations<OmnizonkSpecs> => {
        if (!isUndefined(minEqualDivision) && maxEqualDivision < minEqualDivision) {
            return {
                maxEqualDivision: 'cannot be less than the minimum equal division',
                minEqualDivision: 'cannot be more than the maximum equal division',
            }
        }

        if (!isUndefined(maxFilteredEqualDivision) && maxFilteredEqualDivision >= maxEqualDivision) {
            return {
                maxEqualDivision: 'does not make sense to filter out more than the max equal division',
                maxFilteredEqualDivision: 'does not make sense to filter out more than the max equal division',
            }
        }

        return undefined
    }

export {
    computeValidations,
}
