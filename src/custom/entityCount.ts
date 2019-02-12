import { Entity, NoteSpec } from '@musical-patterns/compiler'
import { apply, reciprocal, to } from '@musical-patterns/utilities'
import { OMNIZONK_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => void =
    (entities: Entity[]): void => {
        entities.forEach((entity: Entity) => {
            if (entity.noteSpecs) {
                entity.noteSpecs.forEach((noteSpec: NoteSpec) => {
                    noteSpec.gainSpec = {
                        scalar: apply.Scalar(OMNIZONK_GAIN, to.Scalar(reciprocal(entities.length))),
                    }
                })
            }
        })
    }

export {
    applyGainPerEntitiesCount,
}
