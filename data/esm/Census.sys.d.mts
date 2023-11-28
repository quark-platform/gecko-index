export namespace Census {
    function walkCensus(subject: any, name: any, walker: any): any;
    namespace walkAnything {
        function enter(): {
            enter: () => any;
            done: () => any;
            check: () => any;
        };
        function done(): any;
        function check(): any;
    }
    namespace assertAllZeros {
        export function enter_1(): {
            enter: () => any;
            done: () => any;
            check: (elt: any) => void;
        };
        export { enter_1 as enter };
        export function done_1(): any;
        export { done_1 as done };
        export function check_1(elt: any): void;
        export { check_1 as check };
    }
    function assertAllEqual(basis: any): any;
    function assertAllNotLessThan(basis: any): any;
    function assertAllNotMoreThan(basis: any): any;
    function assertAllWithin(fudge: any, basis: any): any;
}
