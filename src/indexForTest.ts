// tslint:disable no-reaching-imports

export {
    materializeEntities,
    materializeScales,
    buildNote,
    buildEqualDivisions,
    buildEqualDivisionSteps,
    applyGainPerEntitiesCount,
    buildContourElement,
} from './material/indexForTest'
export {
    initial,
    OmnizonkSpec,
} from './spec/indexForTest'
export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
