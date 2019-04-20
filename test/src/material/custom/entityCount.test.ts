import { Entity } from '@musical-patterns/material'
import { to } from '@musical-patterns/utilities'
import { applyGainPerEntitiesCount } from '../../../../src/indexForTest'

describe('entity count', () => {
    it('applies a really really quiet gain, because there are potentially hundreds of entities, and its quieter the more of them there are\'', () => {
        const entities: Entity[] = [
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
            { sections: [ { notes: [ {} ] } ] },
        ]

        applyGainPerEntitiesCount(entities)

        entities.forEach((entity: Entity) => {
            expect(entity.sections![ 0 ].notes![ 0 ].gain!.scalar!)
                .toBeLessThanOrEqualTyped(to.Scalar((1 / 100) / 3))
        })
    })
})
