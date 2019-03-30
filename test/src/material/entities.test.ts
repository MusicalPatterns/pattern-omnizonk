import { Entity, Note, NoteFeature } from '@musical-patterns/compiler'
import { quotient, sum, to } from '@musical-patterns/utilities'
import { initialSpecs, materializeEntities, OmnizonkSpecs } from '../../../src/indexForTest'

describe('entities', () => {
    it('the total count of entities is an inclusive trapezoidal number, summing the equal divisions between the min and the max', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
        }

        const entities: Entity[] = materializeEntities(specs)

        expect(entities.length)
            .toBe(sum(5, 6, 7))
    })

    it('if there is only a single entity, it has the max gain possible', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: to.Denominator(1),
            minEqualDivision: to.Denominator(1),
        }

        const entities: Entity[] = materializeEntities(specs)

        const entity: Entity = entities[ 0 ]
        const notes: Note[] = entity.sections![ 0 ].notes!
        const note: Note = notes[ 0 ]
        const gain: NoteFeature = note.gain!

        expect(gain.scalar)
            .toBe(to.Scalar(0.01))
    })

    it('sets the gain of each entity proportional to the total count of entities', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
        }

        const entities: Entity[] = materializeEntities(specs)

        entities.forEach((entity: Entity) => {
            const notes: Note[] = entity.sections![ 0 ].notes!
            const note: Note = notes[ 0 ]
            const gain: NoteFeature = note.gain!

            expect(gain.scalar)
                .toBe(to.Scalar(quotient(0.01, sum(5, 6, 7))))
        })
    })
})
