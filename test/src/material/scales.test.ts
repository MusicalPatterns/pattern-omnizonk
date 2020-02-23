import { AbstractName, Scale, Scales } from '@musical-patterns/material'
import { as, Frequency, Logarithm, Maybe, Pitch, pow, Scalar } from '@musical-patterns/utilities'
import { initialSpecs, materializeScales, OmnizonkSpecs } from '../../../src/indexForTest'

describe('scales', (): void => {
    let scales: Scales
    const period: Logarithm<Frequency> = as.Logarithm<Frequency>(3)
    beforeEach((): void => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(7),
            minEqualDivision: as.Denominator(5),
            period,
        }
        scales = materializeScales(specs)
    })

    it('includes one pitch scale for every edo up to the max edo', (): void => {
        expect(scales[ AbstractName.PITCH ]!.length)
            .toBe(3)
    })

    it('every pitch scale has a number of scalars equal to its equal division', (): void => {
        expect(scales[ AbstractName.PITCH ]![ 0 ].scalars!.length)
            .toBe(5)
        expect(scales[ AbstractName.PITCH ]![ 1 ].scalars!.length)
            .toBe(6)
        expect(scales[ AbstractName.PITCH ]![ 2 ].scalars!.length)
            .toBe(7)
    })

    it(`every scale's scalars starts with the identity scalar`, (): void => {
        const pitchScales: Array<Scale<Pitch>> = scales[ AbstractName.PITCH ] as Array<Scale<Pitch>>
        pitchScales.forEach((scale: Scale<Pitch>): void => {
            const scalars: Maybe<Array<Scalar<Pitch>>> = scale.scalars
            if (scalars) {
                expect(scalars[ 0 ])
                    .toBe(as.Scalar<Pitch>(1))
            }
            else {
                fail('scale is missing its scalars')
            }
        })
    })

    it(`a scale's scalars are the steps of the respective equal division`, (): void => {
        const pitchScales: Array<Scale<Pitch>> = scales[ AbstractName.PITCH ] as Array<Scale<Pitch>>
        const scalars: Array<Scalar<Pitch>> = pitchScales[ 0 ].scalars!
        if (scalars) {
            expect(scalars[ 0 ])
                .toBeCloseToTyped(as.Scalar<Pitch>(as.number(pow(period, as.Exponent<Frequency>(0 / 5)))))
            expect(scalars[ 1 ])
                .toBeCloseToTyped(as.Scalar<Pitch>(as.number(pow(period, as.Exponent<Frequency>(1 / 5)))))
            expect(scalars[ 2 ])
                .toBeCloseToTyped(as.Scalar<Pitch>(as.number(pow(period, as.Exponent<Frequency>(2 / 5)))))
            expect(scalars[ 3 ])
                .toBeCloseToTyped(as.Scalar<Pitch>(as.number(pow(period, as.Exponent<Frequency>(3 / 5)))))
            expect(scalars[ 4 ])
                .toBeCloseToTyped(as.Scalar<Pitch>(as.number(pow(period, as.Exponent<Frequency>(4 / 5)))))
        }
        else {
            fail('scale is missing its scalars')
        }
    })
})
