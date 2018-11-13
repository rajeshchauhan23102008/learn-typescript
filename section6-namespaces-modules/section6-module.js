"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PI, calculateCircumference } from './section6-module-circle';
var Circle = __importStar(require("./section6-module-circle"));
var section6_module_rectangle_1 = require("./section6-module-rectangle");
// console.log(PI);
// console.log(calculateCircumference(6));
console.log(Circle.PI);
console.log(Circle.calculateCircumference(6));
console.log(section6_module_rectangle_1.calculateRectangle(9, 20));
