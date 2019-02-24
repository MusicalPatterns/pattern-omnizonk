import { SpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { OmnizonkSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecDataFor<OmnizonkSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
