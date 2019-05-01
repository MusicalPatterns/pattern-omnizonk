import { Entity, Feature, Note } from '@musical-patterns/material'
import { as, Intensity, quotient, sum } from '@musical-patterns/utilities'
import { initialSpecs, materializeEntities, OmnizonkSpecs } from '../../../src/indexForTest'

describe('entities', () => {
    it('the total count of entities is an inclusive trapezoidal number, summing the equal divisions between the min and the max', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(7),
            minEqualDivision: as.Denominator(5),
        }

        const entities: Entity[] = materializeEntities(specs)

        expect(entities.length)
            .toBe(sum(5, 6, 7))
    })

    it('if there is only a single entity, it has the max intensity possible', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(1),
            minEqualDivision: as.Denominator(1),
        }

        const entities: Entity[] = materializeEntities(specs)

        const entity: Entity = entities[ 0 ]
        const notes: Note[] = entity.sections![ 0 ].notes!
        const note: Note = notes[ 0 ]
        const intensity: Feature<Intensity> = note.intensity!

        expect(intensity.scalar)
            .toBe(as.Scalar<Intensity>(5))
    })

    it('sets the intensity of each entity proportional to the total count of entities', () => {
        const specs: OmnizonkSpecs = {
            ...initialSpecs,
            maxEqualDivision: as.Denominator(7),
            minEqualDivision: as.Denominator(5),
        }

        const entities: Entity[] = materializeEntities(specs)

        entities.forEach((entity: Entity) => {
            const notes: Note[] = entity.sections![ 0 ].notes!
            const note: Note = notes[ 0 ]
            const intensity: Feature<Intensity> = note.intensity!

            expect(intensity.scalar)
                .toBe(as.Scalar<Intensity>(quotient(5, sum(5, 6, 7))))
        })
    })
})
