import { Entity, NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { OCTAVE, quotient, Scalar, sum, to } from '@musical-patterns/utilities'
import { buildEntities, OmnizonkSpec } from '../../../src/indexForTest'

describe('entities', () => {
    it('the total count of entities is an inclusive trapezoidal number, summing the equal divisions between the min and the max', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        const entities: Entity[] = buildEntities(spec)

        expect(entities.length)
            .toBe(sum(5, 6, 7))
    })

    it('if there is only a single entity, it has the max gain possible', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(1),
            minEqualDivision: to.Denominator(1),
            window: OCTAVE,
        }

        const entities: Entity[] = buildEntities(spec)

        const entity: Entity = entities[ 0 ]
        const part: NoteSpec[] = entity.noteSpecs || []
        const noteSpec: NoteSpec = part[ 0 ] || {}
        const gainSpec: NotePropertySpec = noteSpec.gainSpec || {}
        const gain: Scalar = gainSpec.scalar || to.Scalar(0)

        expect(gain)
            .toBe(to.Scalar(0.01))
    })

    it('sets the gain of each entity proportional to the total count of entities', () => {
        const spec: OmnizonkSpec = {
            maxEqualDivision: to.Denominator(7),
            minEqualDivision: to.Denominator(5),
            window: OCTAVE,
        }

        const entities: Entity[] = buildEntities(spec)

        entities.forEach((entity: Entity) => {
            const part: NoteSpec[] = entity.noteSpecs || []
            const noteSpec: NoteSpec = part[ 0 ] || {}
            const gainSpec: NotePropertySpec = noteSpec.gainSpec || {}
            const gain: Scalar = gainSpec.scalar || to.Scalar(0)

            expect(gain)
                .toBe(to.Scalar(quotient(0.01, sum(5, 6, 7))))
        })
    })
})
