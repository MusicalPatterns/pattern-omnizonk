import { Scale } from '@musical-patterns/material'
import { as, Frequency, Logarithm, Maybe, pow, Scalar, use } from '@musical-patterns/utilities'
import { initialSpecs, materializeScales, OmnizonkSpecs } from '../../../src/indexForTest'

describe('scales', () => {
    let scales: Scale[]
    const period: Logarithm<Frequency> = as.Logarithm<Frequency>(3)
    beforeEach(() => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(7),
            minEqualDivision: as.Denominator(5),
            period,
        }
        scales = materializeScales(specs)
    })

    it('includes one scale for every edo up to the max edo', () => {
        expect(scales.length)
            .toBe(3)
    })

    it('every scale has a number of scalars equal to its equal division', () => {
        expect(scales[ 0 ].scalars!.length)
            .toBe(5)
        expect(scales[ 1 ].scalars!.length)
            .toBe(6)
        expect(scales[ 2 ].scalars!.length)
            .toBe(7)
    })

    it(`every scale's scalars starts with the identity scalar`, () => {
        scales.forEach((scale: Scale): void => {
            const scalars: Maybe<Scalar[]> = scale.scalars
            if (scalars) {
                expect(scalars[ 0 ])
                    .toBe(as.Scalar(1))
            }
            else {
                fail('scale is missing its scalars')
            }
        })
    })

    it(`a scale's scalars are the steps of the respective equal division`, () => {
        const scalars: Maybe<Scalar[]> = scales[ 0 ].scalars
        if (scalars) {
            expect(scalars[ 0 ])
                .toBeCloseToTyped(as.Scalar(as.number(pow(period, as.Exponent<Frequency>(0 / 5)))))
            expect(scalars[ 1 ])
                .toBeCloseToTyped(as.Scalar(as.number(pow(period, as.Exponent<Frequency>(1 / 5)))))
            expect(scalars[ 2 ])
                .toBeCloseToTyped(as.Scalar(as.number(pow(period, as.Exponent<Frequency>(2 / 5)))))
            expect(scalars[ 3 ])
                .toBeCloseToTyped(as.Scalar(as.number(pow(period, as.Exponent<Frequency>(3 / 5)))))
            expect(scalars[ 4 ])
                .toBeCloseToTyped(as.Scalar(as.number(pow(period, as.Exponent<Frequency>(4 / 5)))))
        }
        else {
            fail('scale is missing its scalars')
        }
    })
})
