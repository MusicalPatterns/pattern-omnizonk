import { Entity, PatternMaterial, Scale } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata, PatternSpec } from '@musical-patterns/pattern'

const material: PatternMaterial = {
    buildEntitiesFunction: (): Entity[] => [],
    buildScalesFunction: (): Scale[] => [],
}

const metadata: PatternMetadata = {
    description: 'every equal division of the octave at once',
    formattedName: 'Omnizonk',
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
}

const spec: PatternSpec = {
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.OMNIZONK,
    spec,
}

export {
    pattern,
}
