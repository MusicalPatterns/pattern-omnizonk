import { Feature, Note, Scale } from '@musical-patterns/material'
import { as, Denominator, Pitch, Rational, Scalar, Value } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', (): void => {
    let note: Note
    const equalDivisionStep: Rational = [ as.Numerator(4), as.Denominator(7) ]
    const minEqualDivision: Denominator = as.Denominator(5)
    beforeEach((): void => {
        note = computeNote(computeContourElement(equalDivisionStep, minEqualDivision))
    })

    describe('pitch', (): void => {
        let pitch: Feature<Pitch>
        beforeEach((): void => {
            pitch = note.pitch!
        })

        it('picks the scale corresponding to its equal division', (): void => {
            expect(pitch.scaleIndex)
                .toBe(as.Ordinal<Array<Scale<Pitch>>>(2))
        })

        it('index is the step', (): void => {
            expect(pitch.index)
                .toBe(as.Ordinal<Array<Scalar<Pitch>>>(4))
        })
    })

    describe('value', (): void => {
        let value: Feature<Value>
        beforeEach((): void => {
            value = note.value!
        })

        it('has a really really long value, because this pattern is essentially just holding a single tone cluster forever', (): void => {
            expect(value.scalar!)
                .toBeGreaterThanOrEqualTyped(as.Scalar(9999))
        })
    })
})
