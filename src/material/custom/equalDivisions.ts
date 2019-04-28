import { as, Denominator, INCREMENT, range, use } from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../../spec'

const computeEqualDivisions: (specs: OmnizonkSpecs) => Denominator[] =
    ({ maxEqualDivision, minEqualDivision }: OmnizonkSpecs): Denominator[] =>
        range(
            minEqualDivision,
            use.Cardinal(maxEqualDivision, INCREMENT),
        )
            .map(as.Denominator)

export {
    computeEqualDivisions,
}
