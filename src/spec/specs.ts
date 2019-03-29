import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initialSpecs } from './initials'
import { presets } from './presets'
import { OmnizonkSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<OmnizonkSpecs> = {
    computeValidations,
    configurations,
    initialSpecs,
    presets,
}

export {
    spec,
}
