import { to } from '@musical-patterns/utilities'
import { computeEqualDivisions, initial, OmnizonkSpecs } from '../../../../src/indexForTest'

describe('equal divisions', () => {
    it('returns the range of equal divisions for the spec', () => {
        const specs: OmnizonkSpecs = {
            ...initial,
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
        }

        expect(computeEqualDivisions(specs))
            .toEqual([
                5,
                6,
                7,
            ].map(to.Denominator))
    })
})
