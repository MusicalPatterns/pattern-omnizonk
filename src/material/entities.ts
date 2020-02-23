import { Entity } from '@musical-patterns/material'
import { as, Rational } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeContourElement } from './contours'
import { applyIntensityPerEntitiesCount, computeEqualDivisionSteps } from './custom'
import { computeNote } from './features'

const computeEntityForEqualDivisionStep: (rational: Rational, specs: OmnizonkSpecs) => Entity =
    (rational: Rational, specs: OmnizonkSpecs): Entity => ({
        sections: [
            {
                notes: [
                    computeNote(
                        computeContourElement(
                            rational,
                            specs.minEqualDivision || as.Denominator(1),
                        ),
                    ),
                ],
            },
        ],
    })

const materializeEntities: (specs: OmnizonkSpecs) => Entity[] =
    (specs: OmnizonkSpecs): Entity[] => {
        const equalDivisionSteps: Rational[] = computeEqualDivisionSteps(specs)

        const entities: Entity[] = equalDivisionSteps.map((rational: Rational): Entity =>
            computeEntityForEqualDivisionStep(rational, specs),
        )

        return applyIntensityPerEntitiesCount(entities)
    }

export {
    materializeEntities,
}
