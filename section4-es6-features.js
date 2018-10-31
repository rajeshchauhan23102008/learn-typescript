"use strict";
/* TypeScript and ES6 (ES2015) */
// let & const
console.log('LET & CONST Keyword!!!');
var letVariable = "let variable has block scope";
console.log(letVariable);
letVariable = "this should contain only string";
console.log(letVariable);
var gameLevels = 100;
console.log(gameLevels);
//gameLevels = 200;
function blockScope() {
    //console.log(letVariable);
    var letVariable = "This let variable scope is only inside this function";
    console.log(letVariable);
}
blockScope();
console.log(letVariable);
