import { Entity, Note, Section } from '@musical-patterns/material'
import { as, isUndefined, reciprocal, Scalar, use } from '@musical-patterns/utilities'
import { OMNIZONK_BASE_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (!isUndefined(entity.sections)) {
                entity.sections.forEach((section: Section) => {
                    if (!isUndefined(section.notes)) {
                        section.notes.forEach((note: Note) => {
                            note.gain = {
                                scalar: use.Scalar(
                                    OMNIZONK_BASE_GAIN,
                                    as.Scalar<Scalar<Scalar>>(reciprocal(entities.length)),
                                ),
                            }
                        })
                    }
                })
            }

            return entity
        })

export {
    applyGainPerEntitiesCount,
}
