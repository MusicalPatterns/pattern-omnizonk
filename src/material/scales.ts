import { Scale } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/pattern'
import {
    computeEqualDivisionScalars,
    Denominator,
    from,
    NO_TRANSLATION,
    Scalar,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeEqualDivisions } from './custom'

const materializeScales: (specs: OmnizonkSpecs) => Scale[] =
    (specs: OmnizonkSpecs): Scale[] => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)
        const scalar: Scalar = from.Hz(specs[ StandardSpec.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const translation: Translation =
            from.Hz(specs[ StandardSpec.BASE_FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))

        return equalDivisions.map((equalDivision: Denominator): Scale => {
            const scalars: Scalar[] = computeEqualDivisionScalars(equalDivision, specs.window)

            return { scalar, scalars, translation }
        })
    }

export {
    materializeScales,
}
