import { SpecDataFor } from '@musical-patterns/pattern'
import { OmnizonkSpec } from '../types'
import { attributes } from './attributes'
import { initial } from './initial'
import { validationFunction } from './validation'

const specData: SpecDataFor<OmnizonkSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    specData,
}
