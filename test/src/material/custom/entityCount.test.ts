import { Entity } from '@musical-patterns/material'
import { as } from '@musical-patterns/utilities'
import { applyIntensityPerEntitiesCount } from '../../../../src/indexForTest'

describe('entity count', () => {
    it('applies a really really quiet intensity, because there are potentially hundreds of entities, and its quieter the more of them there are\'', () => {
        const entities: Entity[] = [
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
        ]

        applyIntensityPerEntitiesCount(entities)

        entities.forEach((entity: Entity) => {
            expect(entity.sections![ 0 ].notes![ 0 ].intensity!.scalar!)
                .toBeLessThanOrEqualTyped(as.Scalar((1 / 100) / 3))
        })
    })
})
