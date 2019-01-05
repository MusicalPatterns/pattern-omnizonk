import { Entity } from '@musical-patterns/compiler'
import { Denominator, from, INITIAL, numbers, to } from '@musical-patterns/utilities'
import { buildEqualDivisions } from '../custom'
import { OmnizonkPatternSpec } from '../types'
import { buildNoteSpec } from './notes'

const buildEntities: (patternSpec: OmnizonkPatternSpec) => Entity[] =
    (patternSpec: OmnizonkPatternSpec): Entity[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(patternSpec)

        return equalDivisions.reduce(
            (accumulatingEntities: Entity[], equalDivision: Denominator): Entity[] => {
                const newEntities: Entity[] = numbers.slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                    .map((step: number) => ({
                        noteSpecs: [ buildNoteSpec(
                            [ to.Numerator(step), equalDivision ],
                            patternSpec.minEqualDivision,
                        ) ],
                    }))

                return accumulatingEntities.concat(newEntities)
            },
            [],
        )
    }

export {
    buildEntities,
}
