import { Entity } from '@musical-patterns/compiler'
import { Denominator, from, INITIAL, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        return equalDivisions.reduce(
            (accumulatingEntities: Entity[], equalDivision: Denominator): Entity[] => {
                const newEntities: Entity[] = zeroAndPositiveIntegers
                    .slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                    .map((step: number) => ({
                        noteSpecs: [ buildNoteSpec(
                            [ to.Numerator(step), equalDivision ],
                            spec.minEqualDivision,
                        ) ],
                    }))

                return accumulatingEntities.concat(newEntities)
            },
            [],
        )
    }

export {
    buildEntities,
}
