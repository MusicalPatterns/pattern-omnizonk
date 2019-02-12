import { apply, Cardinal, from, INCLUSIVE, negative, to, trapezoidalNumber } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const calculateEntityCount: (spec: OmnizonkSpec) => Cardinal =
    ({ minEqualDivision, maxEqualDivision }: OmnizonkSpec): Cardinal => {
        const start: number = from.Denominator(apply.Translation(minEqualDivision, to.Translation(negative(1))))
        const rawNegativeMinEqualDivision: number = from.Denominator(negative(minEqualDivision))
        const height: number = from.Denominator(apply.Translation(
            apply.Translation(
                maxEqualDivision,
                to.Translation(rawNegativeMinEqualDivision),
            ),
            INCLUSIVE,
        ))

        return to.Cardinal(trapezoidalNumber({ height, start }))
    }

export {
    calculateEntityCount,
}
