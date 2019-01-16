import { Scale } from '@musical-patterns/compiler'
import { StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { apply, Base, Denominator, from, INITIAL, numbers, Power, Scalar, to } from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkPatternSpec } from '../types'

const buildScales: (patternSpec: OmnizonkPatternSpec) => Scale[] =
    (patternSpec: OmnizonkPatternSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(patternSpec)

        return equalDivisions.map((equalDivision: Denominator): Scale => ({
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ],
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ],
            scalars: numbers.slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                .map((step: number): Scalar => {
                    const windowAsBase: Base = to.Base(from.Scalar(patternSpec.window))
                    const stepAsPower: Power = to.Power((step - 1) / from.FractionalPart(equalDivision))

                    return to.Scalar(from.Base(apply.Power(windowAsBase, stepAsPower)))
                }),
        }))
    }

export {
    buildScales,
}
