var MyMath;
(function (MyMath) {
    var MyCircle;
    (function (MyCircle) {
        var PI = 3.14;
        function calcCircle(diameter) {
            return diameter * PI;
        }
        MyCircle.calcCircle = calcCircle;
    })(MyCircle = MyMath.MyCircle || (MyMath.MyCircle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRectangle(length, width) {
        return length * width;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
/* SECTION 6- Namespaces & Modules */
/// <reference path='section6-namespace-circle.ts' /> 
/// <reference path='section6-namespace-rectangle.ts' />
var MyMathCircle = MyMath.MyCircle;
console.log('SECTION 6- Namespaces & Modules');
// namespace MyMath {
//     //const PI : number = 3.14; 
//     // export function calcCircle(diameter: number): number { 
//     //     return diameter * PI;
//     // }
//     // export function calcRectangle(length: number, width: number): number { 
//     //     return length * width;
//     // }
// }
// console.log(MyMath.MyCircle.calcCircle(6));
console.log(MyMathCircle.calcCircle(7));
console.log(MyMath.calcRectangle(4, 6));
