import { Entity } from '@musical-patterns/compiler'
import { Fraction } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeContourElement } from './contours'
import { applyGainPerEntitiesCount, computeEqualDivisionSteps } from './custom'
import { computeNote } from './features'

const computeEntityForEqualDivisionStep: (fraction: Fraction, specs: OmnizonkSpecs) => Entity =
    (fraction: Fraction, specs: OmnizonkSpecs): Entity => ({
        notes: [
            computeNote(
                computeContourElement(
                    fraction,
                    specs.minEqualDivision,
                ),
            ),
        ],
    })

const materializeEntities: (specs: OmnizonkSpecs) => Entity[] =
    (specs: OmnizonkSpecs): Entity[] => {
        const equalDivisionSteps: Fraction[] = computeEqualDivisionSteps(specs)

        const entities: Entity[] = equalDivisionSteps.map((fraction: Fraction): Entity =>
            computeEntityForEqualDivisionStep(fraction, specs),
        )

        return applyGainPerEntitiesCount(entities)
    }

export {
    materializeEntities,
}
