import { Data } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { OmnizonkSpec } from './types'
import { validationFunction } from './validation'

const data: Data<OmnizonkSpec> = {
    attributes,
    initial,
    validationFunction,
}

export {
    data,
}
