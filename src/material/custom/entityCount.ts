import { Entity, Note, Section } from '@musical-patterns/material'
import { as, computeLength, Intensity, isUndefined, reciprocal, use } from '@musical-patterns/utilities'
import { OMNIZONK_INTENSITY_SCALAR_SCALAR } from './constants'

const applyIntensityPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (!isUndefined(entity.sections)) {
                entity.sections.forEach((section: Section) => {
                    if (!isUndefined(section.notes)) {
                        section.notes.forEach((note: Note) => {
                            note.intensity = {
                                scalar: use.Scalar(
                                    as.Scalar<Intensity>(as.number(reciprocal(computeLength(entities)))),
                                    OMNIZONK_INTENSITY_SCALAR_SCALAR,
                                ),
                            }
                        })
                    }
                })
            }

            return entity
        })

export {
    applyIntensityPerEntitiesCount,
}
