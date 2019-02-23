import { Entity } from '@musical-patterns/compiler'
import { Ratio } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../types'
import { applyGainPerEntitiesCount, buildEqualDivisionSteps } from './custom'
import { buildNoteSpec } from './notes'

const buildEntityForEqualDivisionStep: (ratio: Ratio, spec: OmnizonkSpec) => Entity =
    (ratio: Ratio, spec: OmnizonkSpec): Entity => ({
        noteSpecs: [
            buildNoteSpec(
                ratio,
                spec.minEqualDivision,
            ),
        ],
    })

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisionSteps: Ratio[] = buildEqualDivisionSteps(spec)

        const entities: Entity[] = equalDivisionSteps.map((ratio: Ratio): Entity =>
            buildEntityForEqualDivisionStep(ratio, spec),
        )

        return applyGainPerEntitiesCount(entities)
    }

export {
    buildEntities,
}
