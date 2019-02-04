import { apply, Count, from, to, trapezoidalNumber } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const calculateEntityCount: (spec: OmnizonkSpec) => Count =
    ({ minEqualDivision, maxEqualDivision }: OmnizonkSpec): Count => {
        const start: number = apply.Offset(from.FractionalPart(minEqualDivision), to.Offset(-1))
        const height: number =
            apply.Offset(from.FractionalPart(maxEqualDivision) - from.FractionalPart(minEqualDivision), to.Offset(1))

        return to.Count(trapezoidalNumber({ height, start }))
    }

export {
    calculateEntityCount,
}
