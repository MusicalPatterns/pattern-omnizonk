import { Scale } from '@musical-patterns/compiler'
import { apply, Base, from, Maybe, OCTAVE, Scalar, testIsCloseTo, to } from '@musical-patterns/utilities'
import { buildScales, OmnizonkPatternSpec } from '../../../src/indexForTest'

describe('scales', () => {
    let scales: Scale[]
    beforeEach(() => {
        const patternSpec: OmnizonkPatternSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }
        scales = buildScales(patternSpec)
    })

    it('includes one scale for every edo up to the max edo', () => {
        expect(scales.length)
            .toBe(3)
    })

    it('every scale has a number of scalars equal to its equal division', () => {
        expect(scales[ 0 ].scalars && scales[ 0 ].scalars.length)
            .toBe(5)
        expect(scales[ 1 ].scalars && scales[ 1 ].scalars.length)
            .toBe(6)
        expect(scales[ 2 ].scalars && scales[ 2 ].scalars.length)
            .toBe(7)
    })

    it('every scale\'s scalars starts with the identity scalar', () => {
        scales.forEach((scale: Scale): void => {
            const scalars: Maybe<Scalar[]> = scale.scalars
            if (scalars) {
                expect(scalars[ 0 ])
                    .toBe(to.Scalar(1))
            }
            else {
                fail('scale is missing its scalars')
            }
        })
    })

    it('a scale\'s scalars are the steps of the respective equal division', () => {
        const scalars: Maybe<Scalar[]> = scales[ 0 ].scalars
        if (scalars) {
            const windowAsBase: Base = to.Base(from.Scalar(OCTAVE))
            expect(testIsCloseTo(scalars[ 0 ], to.Scalar(from.Base(apply.Power(windowAsBase, to.Power(0 / 5))))))
                .toBeTruthy()
            expect(testIsCloseTo(scalars[ 1 ], to.Scalar(from.Base(apply.Power(windowAsBase, to.Power(1 / 5))))))
                .toBeTruthy()
            expect(testIsCloseTo(scalars[ 2 ], to.Scalar(from.Base(apply.Power(windowAsBase, to.Power(2 / 5))))))
                .toBeTruthy()
            expect(testIsCloseTo(scalars[ 3 ], to.Scalar(from.Base(apply.Power(windowAsBase, to.Power(3 / 5))))))
                .toBeTruthy()
            expect(testIsCloseTo(scalars[ 4 ], to.Scalar(from.Base(apply.Power(windowAsBase, to.Power(4 / 5))))))
                .toBeTruthy()
        }
        else {
            fail('scale is missing its scalars')
        }
    })
})
