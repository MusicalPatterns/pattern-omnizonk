import { NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { Denominator, Ratio, to } from '@musical-patterns/utilities'
import { buildNoteSpec } from '../../../src/indexForTest'

describe('notes', () => {
    let noteSpec: NoteSpec
    const ratio: Ratio = [ to.Numerator(4), to.Denominator(7) ]
    const minEqualDivision: Denominator = to.Denominator(5)
    beforeEach(() => {
        noteSpec = buildNoteSpec(ratio, minEqualDivision)
    })

    describe('pitch', () => {
        let pitchSpec: NotePropertySpec
        beforeEach(() => {
            pitchSpec = noteSpec.pitchSpec || {}
        })

        it('picks the scale corresponding to its equal division', () => {
            expect(pitchSpec.scaleIndex)
                .toBe(to.Ordinal(2))
        })

        it('index is the step', () => {
            expect(pitchSpec.index)
                .toBe(to.Ordinal(4))
        })
    })

    describe('duration', () => {
        let durationSpec: NotePropertySpec
        beforeEach(() => {
            durationSpec = noteSpec.durationSpec || {}
        })

        it('has a really really long duration, because this pattern is essentially just holding a single tone cluster forever', () => {
            expect(durationSpec.scalar)
                .toBeGreaterThanOrEqual(10000)
        })
    })
})
