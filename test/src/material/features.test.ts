import { Note, NoteFeature } from '@musical-patterns/material'
import { Denominator, Fraction, testIsGreaterThanOrEqualTo, to } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', () => {
    let note: Note
    const fraction: Fraction = [ to.Numerator(4), to.Denominator(7) ]
    const minEqualDivision: Denominator = to.Denominator(5)
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
                .toBe(to.Ordinal(2))
        })

        it('index is the step', () => {
            expect(pitch.index)
                .toBe(to.Ordinal(4))
        })
    })

    describe('duration', () => {
        let duration: NoteFeature
        beforeEach(() => {
            duration = note.duration!
        })

        it('has a really really long duration, because this pattern is essentially just holding a single tone cluster forever', () => {
            testIsGreaterThanOrEqualTo(duration.scalar!, to.Scalar(9999))
        })
    })
})
