"use strict";
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
