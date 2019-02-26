import { Entity, NoteSpec } from '@musical-patterns/compiler'
import { apply, from, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_BASE_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (entity.noteSpecs) {
                entity.noteSpecs.forEach((noteSpec: NoteSpec) => {
                    noteSpec.gainSpec = {
                        scalar: from.Amplitude(apply.Scalar(
                            OMNIZONK_BASE_GAIN,
                            to.Scalar(reciprocal(entities.length)),
                        )) as Scalar,
                    }
                })
            }

            return entity
        })

export {
    applyGainPerEntitiesCount,
}
