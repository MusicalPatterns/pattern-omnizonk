import { Entity } from '@musical-patterns/compiler'
import { applyGainPerEntitiesCount } from '../../../../src/indexForTest'

describe('entity count', () => {
    it('applies a really really quiet gain, because there are potentially hundreds of entities, and its quieter the more of them there are\'', () => {
        const entities: Entity[] = [
            { notes: [ {} ] },
            { notes: [ {} ] },
            { notes: [ {} ] },
        ]

        applyGainPerEntitiesCount(entities)

        entities.forEach((entity: Entity) => {
            expect(entity.notes![ 0 ].gain!.scalar)
                .toBeLessThanOrEqual((1 / 100) / 3)
        })
    })
})
