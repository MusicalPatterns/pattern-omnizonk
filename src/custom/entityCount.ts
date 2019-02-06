import { apply, Cardinal, from, to, trapezoidalNumber } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'

const calculateEntityCount: (spec: OmnizonkSpec) => Cardinal =
    ({ minEqualDivision, maxEqualDivision }: OmnizonkSpec): Cardinal => {
        const start: number = apply.Translation(from.FractionalPart(minEqualDivision), to.Translation(-1))
        const height: number = apply.Translation(
            apply.Translation(
                from.FractionalPart(maxEqualDivision),
                to.Translation(-from.FractionalPart(minEqualDivision)),
            ),
            to.Translation(1),
        )

        return to.Cardinal(trapezoidalNumber({ height, start }))
    }

export {
    calculateEntityCount,
}
