// tslint:disable no-identical-expressions

import { as, asRational } from '@musical-patterns/utilities'
import { computeFallingContourElement } from '../../../src/indexForTest'

describe('contour element', (): void => {
    it('does it right, when falling', (): void => {
        expect(computeFallingContourElement(asRational(0, 1), as.Denominator(2)))
            .toEqual([
                0,
                1 / 1,
                1 / 1,
                -1,
            ])
        expect(computeFallingContourElement(asRational(0, 8), as.Denominator(2)))
            .toEqual([
                0,
                8 / 8,
                1 / 8,
                6,
            ])
        expect(computeFallingContourElement(asRational(1, 8), as.Denominator(2)))
            .toEqual([
                1,
                7 / 8,
                1 / 8,
                6,
            ])
        expect(computeFallingContourElement(asRational(2, 8), as.Denominator(2)))
            .toEqual([
                2,
                6 / 8,
                1 / 8,
                6,
            ])
    })
})
