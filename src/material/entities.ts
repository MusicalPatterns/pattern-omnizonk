import { Entity } from '@musical-patterns/compiler'
import { Denominator, from, INITIAL, slice, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { applyGainPerEntitiesCount, buildEqualDivisions } from '../custom'
import { OmnizonkSpec } from '../types'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)

        const entities: Entity[] = equalDivisions.reduce(
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
                            ),
                        ],
                    }))

                return accumulatingEntities.concat(entitiesForEqualDivision)
            },
            [],
        )

        applyGainPerEntitiesCount(entities)

        return entities
    }

export {
    buildEntities,
}
