import { Entity } from '@musical-patterns/compiler'
import { Cardinal, Denominator, from, INITIAL, slice, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { buildEqualDivisions, calculateEntityCount } from '../custom'
import { OmnizonkSpec } from '../types'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)
        const entityCount: Cardinal = calculateEntityCount(spec)

        return equalDivisions.reduce(
            (accumulatingEntities: Entity[], equalDivision: Denominator): Entity[] => {
                const entitiesForEqualDivision: Entity[] = slice(
                    zeroAndPositiveIntegers,
                    INITIAL,
                    to.Ordinal(from.Denominator(equalDivision)),
                )
                    .map((equalDivisionStep: number) => ({
                        noteSpecs: [
                            buildNoteSpec(
                                [ to.Numerator(equalDivisionStep), equalDivision ],
                                spec.minEqualDivision,
                                entityCount,
                            ),
                        ],
                    }))

                return accumulatingEntities.concat(entitiesForEqualDivision)
            },
            [],
        )
    }

export {
    buildEntities,
}
