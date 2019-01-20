import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, Denominator, from, INITIAL, numbers, Power, Scalar, to } from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'

const buildScales: (spec: OmnizonkSpec) => Scale[] =
    (spec: OmnizonkSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        return equalDivisions.map((equalDivision: Denominator): Scale => ({
            offset: spec[ StandardSpecProperties.PATTERN_PITCH_OFFSET ],
            scalar: spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ],
            scalars: numbers.slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                .map((step: number): Scalar => {
                    const stepAsPower: Power = to.Power((step - 1) / from.FractionalPart(equalDivision))

                    return to.Scalar(from.Base(apply.Power(spec.window, stepAsPower)))
                }),
        }))
    }

export {
    buildScales,
}
