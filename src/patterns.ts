import { Id, Pattern, Patterns } from '@musical-patterns/pattern'
import { material } from './material'
import { metadata } from './metadata'
import { OmnizonkSpecs, spec } from './spec'

const pattern: Pattern<OmnizonkSpecs> = {
    id: Id.OMNIZONK,
    material,
    metadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
