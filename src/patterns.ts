import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { to } from '@musical-patterns/utilities'
import {
    OMNIZONK_MAX_EQUAL_DIVISION,
    OMNIZONK_MIN_EQUAL_DIVISION,
    OMNIZONK_PITCH_SCALAR,
    OMNIZONK_WINDOW,
} from './constants'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { OmnizonkPatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Omnizonk',
    mostRecentPublish: process.env.PUBLISH_DATE,
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
    originalPublish: '2016-09-10T07:00:00.000Z',
}

const spec: OmnizonkPatternSpec = {
    maxEqualDivision: OMNIZONK_MAX_EQUAL_DIVISION,
    minEqualDivision: OMNIZONK_MIN_EQUAL_DIVISION,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: OMNIZONK_PITCH_SCALAR,
    window: OMNIZONK_WINDOW,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.OMNIZONK,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
