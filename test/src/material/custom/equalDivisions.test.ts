import { as } from '@musical-patterns/utilities'
import { computeEqualDivisions, initialSpecs, OmnizonkSpecs } from '../../../../src/indexForTest'

describe('equal divisions', () => {
    it('returns the range of equal divisions for the spec', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(7),
            minEqualDivision: as.Denominator(5),
        }

        expect(computeEqualDivisions(specs))
            .toEqual([
                5,
                6,
                7,
            ].map(as.Denominator))
    })
})
