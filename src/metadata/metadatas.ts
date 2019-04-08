import { Metadata } from '@musical-patterns/metadata'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Omnizonk',
    mostRecentPublish: process.env.PUBLISH_DATE || '2016-09-10T07:00:00.000Z',
    musicalIdeaIllustrated: 'Farey sequence as a tone cluster',
    originalPublish: '2016-09-10T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
