import { Scale } from '@musical-patterns/compiler'
import { StandardProperty } from '@musical-patterns/pattern'
import {
    buildEqualDivisionScalars,
    Denominator,
    from,
    NO_TRANSLATION,
    Scalar,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../spec'
import { buildEqualDivisions } from './custom'

const materializeScales: (spec: OmnizonkSpec) => Scale[] =
    (spec: OmnizonkSpec): Scale[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)
        const scalar: Scalar = from.Hz(spec[ StandardProperty.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const translation: Translation =
            from.Hz(spec[ StandardProperty.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))

        return equalDivisions.map((equalDivision: Denominator): Scale => {
            const scalars: Scalar[] = buildEqualDivisionScalars(equalDivision)

            return { scalar, scalars, translation }
        })
    }

export {
    materializeScales,
}
