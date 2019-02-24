import { Entity } from '@musical-patterns/compiler'
import { Fraction } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../spec'
import { applyGainPerEntitiesCount, buildEqualDivisionSteps } from './custom'
import { buildNoteSpec } from './notes'

const buildEntityForEqualDivisionStep: (fraction: Fraction, spec: OmnizonkSpec) => Entity =
    (fraction: Fraction, spec: OmnizonkSpec): Entity => ({
        noteSpecs: [
            buildNoteSpec(
                fraction,
                spec.minEqualDivision,
            ),
        ],
    })

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisionSteps: Fraction[] = buildEqualDivisionSteps(spec)

        const entities: Entity[] = equalDivisionSteps.map((fraction: Fraction): Entity =>
            buildEntityForEqualDivisionStep(fraction, spec),
        )

        return applyGainPerEntitiesCount(entities)
    }

export {
    buildEntities,
}
