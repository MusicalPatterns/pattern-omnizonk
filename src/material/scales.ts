import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import {
    apply,
    Denominator,
    from,
    INITIAL,
    NO_TRANSLATION,
    Numerator,
    Power,
    Scalar,
    slice,
    to,
    Translation,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'

const buildScales: (spec: OmnizonkSpec) => Scale[] =
    (spec: OmnizonkSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)
        const scalar: Scalar = from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const translation: Translation =
            from.Hz(spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))

        return equalDivisions.map((equalDivision: Denominator): Scale => {
            const scalars: Scalar[] = slice(
                zeroAndPositiveIntegers,
                INITIAL,
                to.Ordinal(from.Denominator(equalDivision)),
            )
                .map(to.Numerator)
                .map((equalDivisionStep: Numerator): Scalar => {
                    const ratioOfEqualDivisionStepsToEqualDivisionAsPower: Power =
                        to.Power(from.Ratio(apply.Denominator(equalDivisionStep, equalDivision)))

                    return to.Scalar(from.Base(apply.Power(
                        spec.window,
                        ratioOfEqualDivisionStepsToEqualDivisionAsPower,
                    )))
                })

            return { scalar, scalars, translation }
        })
    }

export {
    buildScales,
}
