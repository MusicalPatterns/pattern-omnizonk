import { as, Denominator, FIRST, INCREMENT, range, use } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        range(
            minEqualDivision || FIRST,
            use.Cardinal(maxEqualDivision, INCREMENT),
        )
            .map(as.Denominator)

export {
    computeEqualDivisions,
}
