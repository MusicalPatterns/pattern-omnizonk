import { Entity, Note, NotesSection } from '@musical-patterns/compiler'
import { Amplitude, apply, from, isUndefined, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_BASE_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (!isUndefined(entity.sections)) {
                entity.sections.forEach((section: NotesSection) => {
                    if (!isUndefined(section.notes)) {
                        section.notes.forEach((note: Note) => {
                            note.gain = {
                                scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(apply.Scalar(
                                    OMNIZONK_BASE_GAIN,
                                    to.Scalar(reciprocal(entities.length)),
                                )),
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
