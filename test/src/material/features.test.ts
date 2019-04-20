import { Note, NoteFeature, Scale } from '@musical-patterns/material'
import { as, Denominator, Fraction, Scalar } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', () => {
    let note: Note
    const fraction: Fraction = [ as.Numerator(4), as.Denominator(7) ]
    const minEqualDivision: Denominator = as.Denominator(5)
    beforeEach(() => {
        note = computeNote(computeContourElement(fraction, minEqualDivision))
    })

    describe('pitch', () => {
        let pitch: NoteFeature
        beforeEach(() => {
            pitch = note.pitch!
        })

        it('picks the scale corresponding to its equal division', () => {
            expect(pitch.scaleIndex)
                .toBe(as.Ordinal<Scale>(2))
        })

        it('index is the step', () => {
            expect(pitch.index)
                .toBe(as.Ordinal<Scalar>(4))
        })
    })

    describe('duration', () => {
        let duration: NoteFeature
        beforeEach(() => {
            duration = note.duration!
        })

        it('has a really really long duration, because this pattern is essentially just holding a single tone cluster forever', () => {
            expect(duration.scalar!)
                .toBeGreaterThanOrEqualTyped(as.Scalar(9999))
        })
    })
})
