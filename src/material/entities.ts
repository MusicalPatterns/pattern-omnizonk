import { Entity } from '@musical-patterns/material'
import { as, Rational } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeContourElement, computeFallingContourElement } from './contours'
import { applyIntensityPerEntitiesCount, computeEqualDivisionSteps } from './custom'
import { computeNote, computeSpaceholderNote } from './features'

const computeEntityForEqualDivisionStep: (equalDivisionStep: Rational, specs: OmnizonkSpecs) => Entity =
    (equalDivisionStep: Rational, { minEqualDivision, falling }: OmnizonkSpecs): Entity => ({
        sections: [
            {
                notes: falling ?
                    [
                        computeSpaceholderNote(equalDivisionStep),
                        computeNote(
                            computeFallingContourElement(equalDivisionStep, minEqualDivision || as.Denominator(1)),
                        ),
                    ] :
                    [
                        computeNote(
                            computeContourElement(equalDivisionStep, minEqualDivision || as.Denominator(1)),
                        ),
                    ],
            },
        ],
    })

const materializeEntities: (specs: OmnizonkSpecs) => Entity[] =
    (specs: OmnizonkSpecs): Entity[] => {
        const equalDivisionSteps: Rational[] = computeEqualDivisionSteps(specs)

        const entities: Entity[] = equalDivisionSteps.map((equalDivisionStep: Rational): Entity =>
            computeEntityForEqualDivisionStep(equalDivisionStep, specs),
        )

        return applyIntensityPerEntitiesCount(entities)
    }

export {
    materializeEntities,
}
