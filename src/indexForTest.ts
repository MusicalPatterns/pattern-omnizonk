// tslint:disable:no-reaching-imports

export {
    buildEntities,
    buildScales,
    buildNoteSpec,
} from './materials/indexForTest'
export {
    buildEqualDivisions,
} from './custom/indexForTest'
export {
    OmnizonkSpec,
} from './types'
export { pattern } from './patterns'

// tslint:disable-next-line:no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
