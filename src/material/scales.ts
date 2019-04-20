import { Scale } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import {
    computeEqualDivisionScalars,
    Denominator,
    Hz,
    MULTIPLICATIVE_IDENTITY,
    NO_TRANSLATION,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeEqualDivisions } from './custom'

// tslint:disable-next-line no-any
const materializeScales: (specs: OmnizonkSpecs) => Array<Scale<any>> =
    // tslint:disable-next-line no-any
    (specs: OmnizonkSpecs): Array<Scale<any>> => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)
        const scalar: Scalar<Hz> = specs[ StandardSpec.BASE_FREQUENCY ] || MULTIPLICATIVE_IDENTITY
        const translation: Translation<Hz> = specs[ StandardSpec.BASE_FREQUENCY_TRANSLATION ] || NO_TRANSLATION

        return equalDivisions.map((equalDivision: Denominator): Scale<Hz> => {
            const scalars: Array<Scalar<Hz>> = computeEqualDivisionScalars(equalDivision, specs.window)

            return { scalar, scalars, translation }
        })
    }

export {
    materializeScales,
}
