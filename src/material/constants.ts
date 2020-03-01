// tslint:disable no-magic-numbers

import { as, Scalar, Value } from '@musical-patterns/utilities'

const OMNIZONK_FOREVER: Scalar<Value> = as.Scalar<Value>(50000)
const OMNIZONK_INSTANT: Scalar<Value> =  as.Scalar<Value>(0.00001)

export {
    OMNIZONK_FOREVER,
    OMNIZONK_INSTANT,
}
