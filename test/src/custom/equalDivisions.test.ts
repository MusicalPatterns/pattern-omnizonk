import { OCTAVE, to } from '@musical-patterns/utilities'
import { buildEqualDivisions, OmnizonkSpec } from '../../../src/indexForTest'

describe('equal divisions', () => {
    it('returns the range of equal divisions for the spec', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        expect(buildEqualDivisions(spec))
            .toEqual([
                5,
                6,
                7,
            ].map(to.Denominator))
    })
})
