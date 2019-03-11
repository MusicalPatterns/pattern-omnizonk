import { Entity } from '@musical-patterns/compiler'
import { Fraction } from '@musical-patterns/utilities'
import { OmnizonkSpec } from '../spec'
import { computeContourElement } from './contours'
import { applyGainPerEntitiesCount, computeEqualDivisionSteps } from './custom'
import { computeNote } from './features'

const computeEntityForEqualDivisionStep: (fraction: Fraction, spec: OmnizonkSpec) => Entity =
    (fraction: Fraction, spec: OmnizonkSpec): Entity => ({
        notes: [
            computeNote(
                computeContourElement(
                    fraction,
                    spec.minEqualDivision,
                ),
            ),
        ],
    })

const materializeEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisionSteps: Fraction[] = computeEqualDivisionSteps(spec)

        const entities: Entity[] = equalDivisionSteps.map((fraction: Fraction): Entity =>
            computeEntityForEqualDivisionStep(fraction, spec),
        )

        return applyGainPerEntitiesCount(entities)
    }

export {
    materializeEntities,
}
