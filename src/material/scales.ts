import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import {
    apply,
    Denominator,
    from,
    INITIAL,
    Power,
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
            offset: spec[ StandardSpecProperties.FREQUENCY_OFFSET ],
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: zeroAndPositiveIntegers.slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                .map((step: number): Scalar => {
                    const stepAsPower: Power = to.Power(step / from.FractionalPart(equalDivision))

                    return to.Scalar(from.Base(apply.Power(spec.window, stepAsPower)))
                }),
        }))
    }

export {
    buildScales,
}
