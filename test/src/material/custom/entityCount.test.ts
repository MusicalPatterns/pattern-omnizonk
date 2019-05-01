import { Entity } from '@musical-patterns/material'
import { as, Scalar } from '@musical-patterns/utilities'
import { applyIntensityPerEntitiesCount } from '../../../../src/indexForTest'

describe('entity count', () => {
    it('because there are potentially hundreds of entities, its quieter proportionally to how many of them there are, with a numerator that allows it to blow out when there are less than 5 entities, but it is worth it for having loud enough omnizonks at the entity counts that are most common', () => {
        const entities: Entity[] = [
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
        ]

        applyIntensityPerEntitiesCount(entities)

        const expectedScalarOfEntityCount: Scalar = as.Scalar(5 / 3)
        entities.forEach((entity: Entity) => {
            expect(entity.sections![ 0 ].notes![ 0 ].intensity!.scalar!)
                .toBeLessThanOrEqualTyped(expectedScalarOfEntityCount)
        })
    })
})
