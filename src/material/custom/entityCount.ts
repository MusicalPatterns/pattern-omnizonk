import { Entity, NoteSpec } from '@musical-patterns/compiler'
import { apply, reciprocal, to } from '@musical-patterns/utilities'
import { OMNIZONK_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (entity.noteSpecs) {
                entity.noteSpecs.forEach((noteSpec: NoteSpec) => {
                    noteSpec.gainSpec = {
                        scalar: apply.Scalar(OMNIZONK_GAIN, to.Scalar(reciprocal(entities.length))),
                    }
                })
            }

            return entity
        })

export {
    applyGainPerEntitiesCount,
}
