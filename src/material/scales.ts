import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import {
    apply,
    Denominator,
    from,
    INITIAL,
    Integer,
    Power,
    reciprocal,
    Scalar,
    slice,
    to,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'

const buildScales: (spec: OmnizonkSpec) => Scale[] =
    (spec: OmnizonkSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        return equalDivisions.map((equalDivision: Denominator): Scale => ({
            scalar: to.Scalar(from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1))),
            scalars: slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
                .map((integer: Integer): Scalar => {
                    const ratioOfEqualDivisionStepsToEqualDivisionAsPower: Power = to.Power(apply.Scalar(
                        integer,
                        to.Scalar(from.Denominator(reciprocal(equalDivision))),
                    ))

                    return to.Scalar(from.Base(apply.Power(
                        spec.window,
                        ratioOfEqualDivisionStepsToEqualDivisionAsPower,
                    )))
                }),
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ],
        }))
    }

export {
    buildScales,
}
