import { Scale } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import {
    as,
    computeEqualDivisionPitchScalars,
    Denominator,
    Hz,
    NO_SHIFT,
    Pitch,
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
        const basis: Pitch = specs[ StandardSpec.BASIS_FREQUENCY ] || as.Point<Hz>(1)
        const translation: Translation<Pitch> = specs[ StandardSpec.BASIS_FREQUENCY_TRANSLATION ] || NO_SHIFT

        return equalDivisions.map((equalDivision: Denominator) => {
            const scalars: Array<Scalar<Pitch>> = computeEqualDivisionPitchScalars(equalDivision, specs.window)

            return { basis, scalars, translation }
        })
    }

export {
    materializeScales,
}
