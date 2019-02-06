import { NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { Cardinal, Denominator, Ratio, to } from '@musical-patterns/utilities'
import { buildNoteSpec } from '../../../src/indexForTest'

describe('notes', () => {
    let noteSpec: NoteSpec
    const ratio: Ratio = [ to.Numerator(4), to.Denominator(7) ]
    const minEqualDivision: Denominator = to.Denominator(5)
    const entityCount: Cardinal = to.Cardinal(18)
    beforeEach(() => {
        noteSpec = buildNoteSpec(ratio, minEqualDivision, entityCount)
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

    describe('gain', () => {
        let gainSpec: NotePropertySpec
        beforeEach(() => {
            gainSpec = noteSpec.gainSpec || {}
        })

        it('has a really really quiet gain, because there are potentially hundreds of voices, and its quieter the more of them there are', () => {
            expect(gainSpec.scalar)
                .toBeLessThanOrEqual((1 / 100) / 18)
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
