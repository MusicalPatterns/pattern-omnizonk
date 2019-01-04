import { PatternSpec } from '@musical-patterns/pattern';
import { Denominator, Scalar } from '@musical-patterns/utilities';
interface OmnizonkPatternSpec extends PatternSpec {
    maxEqualDivision: Denominator;
    minEqualDivision: Denominator;
    window: Scalar;
}
export { OmnizonkPatternSpec, };
