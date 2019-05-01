import { Scale } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import {
    computeEqualDivisionPitchScalars,
    Denominator,
    musicalAs,
    NO_SHIFT,
    Pitch,
    Scalar,
    Tone,
    Translation,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeEqualDivisions } from './custom'

// tslint:disable-next-line no-any
const materializeScales: (specs: OmnizonkSpecs) => Array<Scale<any>> =
    // tslint:disable-next-line no-any
    (specs: OmnizonkSpecs): Array<Scale<any>> => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)
        const basis: Tone = specs[ StandardSpec.HZ_PHYSICALIZATION ] || musicalAs.Tone(1)
        const translation: Translation<Tone> = specs[ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ] || NO_SHIFT

        return equalDivisions.map((equalDivision: Denominator) => {
            const scalars: Array<Scalar<Pitch>> = computeEqualDivisionPitchScalars(equalDivision, specs.period)

            return { basis, scalars, translation }
        })
    }

export {
    materializeScales,
}
