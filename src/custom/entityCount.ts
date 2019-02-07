import { apply, Cardinal, from, negative, to, trapezoidalNumber } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const calculateEntityCount: (spec: OmnizonkSpec) => Cardinal =
    ({ minEqualDivision, maxEqualDivision }: OmnizonkSpec): Cardinal => {
        const start: number = from.FractionalPart(apply.Translation(minEqualDivision, to.Translation(negative(1))))
        const height: number = from.FractionalPart(apply.Translation(
            apply.Translation(
                maxEqualDivision,
                to.Translation(from.FractionalPart(negative(minEqualDivision))),
            ),
            to.Translation(1),
        ))

        return to.Cardinal(trapezoidalNumber({ height, start }))
    }

export {
    calculateEntityCount,
}
