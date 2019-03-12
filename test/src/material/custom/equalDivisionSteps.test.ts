import { Fraction, to } from '@musical-patterns/utilities'
import { computeEqualDivisionSteps, initial, OmnizonkSpecs } from '../../../../src/indexForTest'

describe('equal division steps', () => {
    it('creates an array of steps of equal divisions', () => {
        const specs: OmnizonkSpecs = {
            ...initial,
            maxEqualDivision: to.Denominator(6),
            minEqualDivision: to.Denominator(3),
        }

        const actual: Fraction[] = computeEqualDivisionSteps(specs)
        const rawExpected: Array<[ number, number ]> = [
            [ 0, 3 ], [ 1, 3 ], [ 2, 3 ],
            [ 0, 4 ], [ 1, 4 ], [ 2, 4 ], [ 3, 4 ],
            [ 0, 5 ], [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ],
            [ 0, 6 ], [ 1, 6 ], [ 2, 6 ], [ 3, 6 ], [ 4, 6 ], [ 5, 6 ],
        ]
        const expected: Fraction[] = rawExpected.map(to.Fraction)

        expect(actual)
            .toEqual(expected)
    })

    it('can filter out just the shared root (which is the same as 1/1, 2/2, 3/3, 4/4, that is why it is the multiples of 1', () => {
        const specs: OmnizonkSpecs = {
            ...initial,
            maxEqualDivision: to.Denominator(6),
            maxFilteredEqualDivision: to.Denominator(1),
            minEqualDivision: to.Denominator(3),
        }

        const actual: Fraction[] = computeEqualDivisionSteps(specs)
        const rawExpected: Array<[ number, number ]> = [
            [ 1, 3 ], [ 2, 3 ],
            [ 1, 4 ], [ 2, 4 ], [ 3, 4 ],
            [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ],
            [ 1, 6 ], [ 2, 6 ], [ 3, 6 ], [ 4, 6 ], [ 5, 6 ],
        ]
        const expected: Fraction[] = rawExpected.map(to.Fraction)

        expect(actual)
            .toEqual(expected)
    })

    it('can filter out the shared root and the tritone shared by every even equal division (also the multiples of 1/2)', () => {
        const specs: OmnizonkSpecs = {
            ...initial,
            maxEqualDivision: to.Denominator(6),
            maxFilteredEqualDivision: to.Denominator(2),
            minEqualDivision: to.Denominator(3),
        }

        const actual: Fraction[] = computeEqualDivisionSteps(specs)
        const rawExpected: Array<[ number, number ]> = [
            [ 1, 3 ], [ 2, 3 ],
            [ 1, 4 ], [ 3, 4 ],
            [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ],
            [ 1, 6 ], [ 2, 6 ], [ 4, 6 ], [ 5, 6 ],
        ]
        const expected: Fraction[] = rawExpected.map(to.Fraction)

        expect(actual)
            .toEqual(expected)
    })

    it('can filter out the shared root and the tritone shared by every even equal division and the major thirds shared by every multiple of 3 equal division (also the multiples of 1/3)', () => {
        const specs: OmnizonkSpecs = {
            ...initial,
            maxEqualDivision: to.Denominator(6),
            maxFilteredEqualDivision: to.Denominator(3),
            minEqualDivision: to.Denominator(3),
        }

        const actual: Fraction[] = computeEqualDivisionSteps(specs)
        const rawExpected: Array<[ number, number ]> = [
            [ 1, 4 ], [ 3, 4 ],
            [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ],
            [ 1, 6 ], [ 5, 6 ],
        ]
        const expected: Fraction[] = rawExpected.map(to.Fraction)

        expect(actual)
            .toEqual(expected)
    })
})
