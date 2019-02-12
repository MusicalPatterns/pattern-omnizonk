// tslint:disable no-reaching-imports

export {
    buildEntities,
    buildScales,
    buildNoteSpec,
} from './material/indexForTest'
export {
    buildEqualDivisions,
    buildEqualDivisionSteps,
    applyGainPerEntitiesCount,
} from './custom/indexForTest'
export {
    initial,
} from './spec/indexForTest'
export {
    OmnizonkSpec,
} from './types'
export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
