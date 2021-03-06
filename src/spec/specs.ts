import { Spec } from '@musical-patterns/spec'
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
    restartOnModify: true,
}

export {
    spec,
}
