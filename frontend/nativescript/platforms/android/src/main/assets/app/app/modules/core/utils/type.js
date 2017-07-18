/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdXRpbHMvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7QUFFSCxJQUFJLFNBQVMsR0FBaUMsRUFBRSxDQUFDO0FBQ2pELGNBQXdCLEtBQWE7SUFDakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFnQixLQUFLLHVCQUFrQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFNBQVMsQ0FBUyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFaEMsTUFBTSxDQUFJLEtBQUssQ0FBQztBQUNwQixDQUFDO0FBUkQsb0JBUUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS91dGlscy90eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvZXJjZXMgYSBzdHJpbmcgaW50byBhIHN0cmluZyBsaXRlcmFsIHR5cGUuXG4gKiBVc2luZyB0YWdnZWQgdW5pb24gdHlwZXMgaW4gVHlwZVNjcmlwdCAyLjAsIHRoaXMgZW5hYmxlc1xuICogcG93ZXJmdWwgdHlwZWNoZWNraW5nIG9mIG91ciByZWR1Y2Vycy5cbiAqIFxuICogU2luY2UgZXZlcnkgYWN0aW9uIGxhYmVsIHBhc3NlcyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gaXRcbiAqIGlzIGEgZ29vZCBwbGFjZSB0byBlbnN1cmUgYWxsIG9mIG91ciBhY3Rpb24gbGFiZWxzXG4gKiBhcmUgdW5pcXVlLlxuICovXG5cbmxldCB0eXBlQ2FjaGU6IHsgW2xhYmVsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiB0eXBlPFQ+KGxhYmVsOiBUIHwgJycpOiBUIHtcbiAgICBpZiAodHlwZUNhY2hlWzxzdHJpbmc+bGFiZWxdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0aW9uIHR5cGUgXCIke2xhYmVsfVwiIGlzIG5vdCB1bnFpdWVcImApO1xuICAgIH1cblxuICAgIHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSA9IHRydWU7XG5cbiAgICByZXR1cm4gPFQ+bGFiZWw7XG59XG4iXX0=
