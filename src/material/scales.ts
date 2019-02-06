import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import {
    apply,
    Denominator,
    from,
    INITIAL,
    Power,
    reciprocal,
    Scalar,
    to,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'

const buildScales: (spec: OmnizonkSpec) => Scale[] =
    (spec: OmnizonkSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        return equalDivisions.map((equalDivision: Denominator): Scale => ({
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: zeroAndPositiveIntegers.slice(from.Ordinal(INITIAL), from.FractionalPart(equalDivision))
                .map((step: number): Scalar => {
                    const stepAsPower: Power = to.Power(apply.Scalar(
                        step,
                        to.Scalar(reciprocal(from.FractionalPart(equalDivision))),
                    ))

                    return to.Scalar(from.Base(apply.Power(spec.window, stepAsPower)))
                }),
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ],
        }))
    }

export {
    buildScales,
}
