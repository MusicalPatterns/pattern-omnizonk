import { Entity } from '@musical-patterns/compiler'
import { OCTAVE, to } from '@musical-patterns/utilities'
import { buildEntities, OmnizonkSpec } from '../../../src/indexForTest'

describe('entities', () => {
    it('the total count of entities is a trapezoidal number, summing the equal divisions between the min and the max', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        const entities: Entity[] = buildEntities(spec)

        expect(entities.length)
            .toBe(5 + 6 + 7)
    })
})
