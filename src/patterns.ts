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
import { OmnizonkPatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: 'every equal division of the octave at once',
    formattedName: 'Omnizonk',
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
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
