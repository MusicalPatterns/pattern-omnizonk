import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initial } from './initials'
import { OmnizonkSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<OmnizonkSpecs> = {
    computeValidations,
    configurations,
    initial,
}

export {
    spec,
}
