import { Cardinal, OCTAVE, to } from '@musical-patterns/utilities'
import { calculateEntityCount, OmnizonkSpec } from '../../../src/indexForTest'

describe('entity count', () => {
    it('the total count of entities is an inclusive trapezoidal number, summing the equal divisions between the min and the max', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        const entityCount: Cardinal = calculateEntityCount(spec)

        expect(entityCount)
            .toBe(to.Cardinal(5 + 6 + 7))
    })
})
