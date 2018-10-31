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
// ARROW FUNCTIONS.
console.log('ARROW FUNCTIONS');
var addition = function (number1, number2) { return number1 + number2; };
console.log(addition(4, 8));
var arrowAddition = function (number1, number2) { return number1 + number2; };
console.log(arrowAddition(30, 3));
var hello = function () { return console.log('hello world'); };
//console.log(hello());
hello();
var helloFriend = function (friend) { return console.log('hello ' + friend); };
//console.log(helloFriend('rohit'));
helloFriend('rohit');
console.log('DEFAULT PARAMETERS!!!');
var defaultParamFunc = function (start) {
    if (start === void 0) { start = 15; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!!!', start);
};
defaultParamFunc();
defaultParamFunc(30);
