// tslint:disable no-reaching-imports

export {
    materializeEntities,
    materializeScales,
    computeNote,
    computeEqualDivisions,
    computeEqualDivisionSteps,
    applyGainPerEntitiesCount,
    computeContourElement,
} from './material/indexForTest'
export {
    initialSpecs,
    OmnizonkSpecs,
} from './spec/indexForTest'
export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
