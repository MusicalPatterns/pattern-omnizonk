import { Entity, Note } from '@musical-patterns/compiler'
import { Amplitude, apply, from, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_BASE_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (entity.notes) {
                entity.notes.forEach((note: Note) => {
                    note.gain = {
                        scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(apply.Scalar(
                            OMNIZONK_BASE_GAIN,
                            to.Scalar(reciprocal(entities.length)),
                        )),
                    }
                })
            }

            return entity
        })

export {
    applyGainPerEntitiesCount,
}
