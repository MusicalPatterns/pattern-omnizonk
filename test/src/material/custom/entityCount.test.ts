import { Entity } from '@musical-patterns/compiler'
import { applyGainPerEntitiesCount } from '../../../../src/indexForTest'

describe('entity count', () => {
    it('applies a really really quiet gain, because there are potentially hundreds of voices, and its quieter the more of them there are\'', () => {
        const entities: Entity[] = [
            { noteSpecs: [ {} ] },
            { noteSpecs: [ {} ] },
            { noteSpecs: [ {} ] },
        ]

        applyGainPerEntitiesCount(entities)

        entities.forEach((entity: Entity) => {
            expect(entity.noteSpecs![0].gainSpec!.scalar)
                .toBeLessThanOrEqual((1 / 100) / 3)
        })
    })
})
