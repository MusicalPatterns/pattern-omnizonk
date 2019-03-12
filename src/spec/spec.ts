import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initial } from './initial'
import { OmnizonkSpecs } from './types'
import { computeValidations } from './validation'

const spec: Spec<OmnizonkSpecs> = {
    computeValidations,
    configurations,
    initial,
}

export {
    spec,
}
