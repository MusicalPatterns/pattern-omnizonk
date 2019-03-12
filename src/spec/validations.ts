import { ComputeValidations, Validations } from '@musical-patterns/pattern'
import { OmnizonkSpecs } from './types'

const computeValidations: ComputeValidations<OmnizonkSpecs> =
    (specs: OmnizonkSpecs): Validations<OmnizonkSpecs> => {
        if (specs.maxEqualDivision < specs.minEqualDivision) {
            return {
                maxEqualDivision: 'cannot be less than the minimum equal division',
                minEqualDivision: 'cannot be more than the maximum equal division',
            }
        }

        if (specs.maxFilteredEqualDivision >= specs.maxEqualDivision) {
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
