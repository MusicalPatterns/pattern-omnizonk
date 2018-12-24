import { OCTAVE, to } from '@musical-patterns/utilities'
import { buildEqualDivisions, OmnizonkPatternSpec } from '../../../src/indexForTest'

describe('equal divisions', () => {
    it('returns the range of equal divisions for the pattern spec', () => {
        const patternSpec: OmnizonkPatternSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        expect(buildEqualDivisions(patternSpec))
            .toEqual([
                5,
                6,
                7,
            ].map(to.Denominator))
    })
})
