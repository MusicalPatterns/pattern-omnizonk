import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Pattern, Patterns } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './material'
import { post } from './metadata'
import { OmnizonkSpec, specData } from './spec'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Omnizonk',
    mostRecentPublish: process.env.PUBLISH_DATE || '2016-09-10T07:00:00.000Z',
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
    originalPublish: '2016-09-10T07:00:00.000Z',
}

const pattern: Pattern<OmnizonkSpec> = {
    id: Id.OMNIZONK,
    material,
    metadata,
    specData,
}

const patterns: Patterns = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
