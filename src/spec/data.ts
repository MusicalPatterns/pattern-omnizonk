import { SpecData } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { OmnizonkSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecData<OmnizonkSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
