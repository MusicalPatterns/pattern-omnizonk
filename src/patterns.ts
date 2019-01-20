import { Material } from '@musical-patterns/compiler'
import { buildPatterns, Id, Metadata, PatternFor, Patterns } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'
import { OmnizonkSpec } from './types'

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

const pattern: PatternFor<OmnizonkSpec> = {
    id: Id.OMNIZONK,
    material,
    metadata,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.id ]: pattern,
})

export {
    pattern,
    patterns,
}
